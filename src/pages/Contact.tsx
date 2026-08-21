import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { EmailIcon, PhoneIcon, LocationIcon, CoffeeBeanIcon } from '@/components/icons/IconSet'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@/utils/cn'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const faqs = [
  {
    id: '1',
    q: 'What are your seasonal hours?',
    a: 'We adjust hours for holidays. Check our Location page or follow us on social media for updates.',
  },
  {
    id: '2',
    q: 'Where can I visit Café Libre in person?',
    a: 'Our flagship coffee roastery is located at 123 Coffee Street in Portland’s Pearl District. You can open directions anytime via Google Maps.',
  },
  {
    id: '3',
    q: 'Are your pastries gluten-free?',
    a: 'We have a dedicated gluten-free selection baked fresh daily. Ask your barista for details.',
  },
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (_data: ContactFormData) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitSuccess(true)
    reset()
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <section className="pt-24 pb-20">
      <Container size="lg">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-3 flex justify-center">
            <CoffeeBeanIcon className="h-7 w-7 text-accent" />
          </div>
          <h1 className="font-display text-4xl font-bold">Get In Touch</h1>
          <p className="mt-3 text-primary-muted">
            Have a question? Want to share feedback? Drop us a line.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <LocationIcon className="mt-1 h-6 w-6 text-accent" />
                <div>
                  <h3 className="font-bold text-primary">Visit Us</h3>
                  <p className="mt-1 text-sm text-primary-muted">
                    123 Coffee Street, Portland, OR 97201
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <PhoneIcon className="mt-1 h-6 w-6 text-accent" />
                <div>
                  <h3 className="font-bold text-primary">Call Us</h3>
                  <p className="mt-1 text-sm text-primary-muted">(503) 555-0123</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <EmailIcon className="mt-1 h-6 w-6 text-accent" />
                <div>
                  <h3 className="font-bold text-primary">Email Us</h3>
                  <p className="mt-1 text-sm text-primary-muted">hello@cafelibre.com</p>
                </div>
              </div>
            </div>

            <div>
              <Badge variant="outline" className="mb-3">
                FAQ
              </Badge>
              <div className="space-y-3">
                <AccordionPrimitive.Root type="single" collapsible>
                  {faqs.map((faq) => (
                    <AccordionItem key={faq.id} faq={faq} />
                  ))}
                </AccordionPrimitive.Root>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {submitSuccess && (
              <motion.div
                className="mb-4 rounded-lg bg-green-100 p-4 text-sm text-green-800"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Your message has been sent! We'll respond within 24 hours.
              </motion.div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-charcoal">Name *</label>
                  <input
                    type="text"
                    className={cn(
                      'w-full rounded-lg border border-border bg-cream px-4 py-2.5',
                      'focus:border-accent focus:outline-none focus:ring-2 focus:ring-terracotta/20',
                      errors.name && 'border-red-400',
                    )}
                    placeholder="Jane Doe"
                    {...register('name')}
                  />
                  {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-charcoal">Email *</label>
                  <input
                    type="email"
                    className={cn(
                      'w-full rounded-lg border border-border bg-cream px-4 py-2.5',
                      'focus:border-accent focus:outline-none focus:ring-2 focus:ring-terracotta/20',
                      errors.email && 'border-red-400',
                    )}
                    placeholder="jane@example.com"
                    {...register('email')}
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-charcoal">Phone</label>
                <input
                  type="tel"
                  className={cn(
                    'w-full rounded-lg border border-border bg-cream px-4 py-2.5',
                    'focus:border-accent focus:outline-none focus:ring-2 focus:ring-terracotta/20',
                  )}
                  placeholder="+1 (503) 555-0123"
                  {...register('phone')}
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-charcoal">Subject *</label>
                <input
                  type="text"
                  className={cn(
                    'w-full rounded-lg border border-border bg-cream px-4 py-2.5',
                    'focus:border-accent focus:outline-none focus:ring-2 focus:ring-terracotta/20',
                    errors.subject && 'border-red-400',
                  )}
                  placeholder="How can we help?"
                  {...register('subject')}
                />
                {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-charcoal">Message *</label>
                <textarea
                  rows={5}
                  className={cn(
                    'w-full resize-none rounded-lg border border-border bg-cream px-4 py-2.5',
                    'focus:border-accent focus:outline-none focus:ring-2 focus:ring-terracotta/20',
                    errors.message && 'border-red-400',
                  )}
                  placeholder="We'd love to hear from you..."
                  {...register('message')}
                />
                {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                isLoading={isSubmitting}
                disabled={isSubmitting}
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

// Accordion item component
function AccordionItem({ faq }: { faq: { id: string; q: string; a: string } }) {
  return (
    <AccordionPrimitive.Item value={faq.id} className="rounded-lg border border-border bg-cream">
      <AccordionPrimitive.Header className="flex items-center">
        <AccordionPrimitive.Trigger className="flex w-full items-center justify-between px-4 py-3 text-left font-medium text-primary transition-all">
          {faq.q}
          <motion.span initial={false} animate={{ rotate: 0 }} className="shrink-0 text-accent">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.span>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content className="overflow-hidden text-sm text-primary-muted transition-all">
        <div className="px-4 pb-3">{faq.a}</div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  )
}
