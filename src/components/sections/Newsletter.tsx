import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
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
    reset()
    alert('Thanks for subscribing! Check your email.')
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
          <p className="mt-3 max-w-2xl text-cream/80">
            Subscribe to get exclusive offers, new menu items, and updates on our upcoming coffee
            cupping events.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 max-w-md">
            <div className="flex gap-3">
              <motion.div className="relative flex-1" whileFocus={{ scale: 1.02 }}>
                <EmailIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-cream/50" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className={cn(
                    'w-full rounded-full bg-cream/10 pl-10 pr-4 py-3',
                    'text-cream placeholder-cream/50',
                    'focus:outline-none focus:ring-2 focus:ring-terracotta',
                    errors.email && 'border border-red-400',
                  )}
                  {...register('email')}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                )}
              </motion.div>
              <Button
                type="submit"
                variant="secondary"
                size="md"
                isLoading={isSubmitting}
                disabled={isSubmitting}
              >
                Sign Up
              </Button>
            </div>
          </form>

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
