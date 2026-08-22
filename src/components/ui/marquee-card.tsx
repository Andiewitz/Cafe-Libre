import { Star } from "lucide-react"
import { LiquidCard, CardContent } from "@/components/ui/liquid-glass-card"
import { Marquee } from "@/components/ui/marquee"
import { testimonials } from "@/data/testimonials"

export const MarqueeCard = () => {
  return (
    <div>
      <Marquee pauseOnHover>
        {testimonials.map((testimonial, index) => (
          <LiquidCard key={index} className="mx-2 rounded-3xl w-80 h-full">
            <CardContent className="p-6 py-0">
              <div className="mb-4 flex items-center space-x-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.onerror = null
                    target.src = '/placeholder.svg'
                  }}
                  className="h-10 w-10 object-cover rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-[#8E7365]">{testimonial.badge}</p>
                </div>
              </div>
              <p className="mb-3 text-xs leading-relaxed text-[#3E281C]">{testimonial.content}</p>
              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#FBBC04] text-[#FBBC04]"
                  />
                ))}
              </div>
            </CardContent>
          </LiquidCard>
        ))}
      </Marquee>
    </div>
  )
}
