import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { EmailIcon } from '@/components/icons/IconSet'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@/utils/cn'

const emailSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
})

type EmailFormData = z.infer<typeof emailSchema>

export function Newsletter() {
  const [subscribed, setSubscribed] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  })

  const onSubmit = async (_data: EmailFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSubscribed(true)
    reset()
    setTimeout(() => setSubscribed(false), 5000)
  }

  return (
    <section className="py-20 bg-espresso text-cream">
      <Container size="md" className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-3 flex justify-center">
            <EmailIcon className="h-7 w-7 text-accent" />
          </div>
          <h2 className="font-display text-3xl font-bold">Stay in the Loop</h2>
          <p className="mt-3 max-w-2xl text-cream/80 mx-auto">
            Subscribe to get exclusive offers, new menu items, and updates on our upcoming coffee
            cupping events.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <motion.div className="relative w-full" whileFocus={{ scale: 1.01 }}>
                <EmailIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#D6A068]" />
                <input
                  type="email"
                  placeholder="your.email@domain.com"
                  className={cn(
                    'w-full rounded-full bg-white/10 border border-[#D6A068]/30 pl-11 pr-4 py-3.5',
                    'text-[#FAF2EA] placeholder-[#FAF2EA]/50 text-sm',
                    'focus:outline-none focus:ring-2 focus:ring-[#C87D32] focus:border-transparent',
                    errors.email && 'border-red-400',
                  )}
                  {...register('email')}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-300 text-left pl-4">
                    {errors.email.message}
                  </p>
                )}
              </motion.div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto shrink-0 bg-[#C87D32] hover:bg-[#B36C25] text-white font-medium px-7 py-3.5 rounded-full transition-all active:scale-95 text-sm shadow-md cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Joining...' : 'Subscribe'}
              </button>
            </div>
          </form>

          <AnimatePresence>
            {subscribed && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2E170C] border border-[#C87D32] text-xs sm:text-sm text-[#FAF2EA]"
              >
                <span>✓</span>
                <span>Thanks for subscribing! Check your email for your welcome perk.</span>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.p
            className="mt-4 text-xs text-cream/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            No spam. Unsubscribe anytime.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  )
}
