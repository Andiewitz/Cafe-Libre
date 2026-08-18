import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { testimonials } from '@/data/testimonials'
import { StarIcon } from '@/components/icons/IconSet'

export function Testimonials() {
  return (
    <section className="section-padding">
      <Container size="lg">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-bold">What Our Community Says</h2>
          <p className="mt-3 text-primary-muted">Hear from the people who make our days brighter</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative rounded-xl bg-bg-alt p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} className="h-4 w-4 text-yellow-400" />
                ))}
              </div>

              <blockquote className="mb-4 text-sm italic text-primary-dark/80">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full object-cover object-center"
                  loading="lazy"
                  onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
                />
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-xs text-primary-muted">{testimonial.role}</p>
                </div>
              </div>

              <motion.div
                className="absolute -top-2 -right-2 opacity-0 transition-opacity group-hover:opacity-100"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <StarIcon className="h-6 w-6 text-yellow-300/50" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
