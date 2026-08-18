import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { LocationIcon, PhoneIcon, ClockIcon, CoffeeBeanIcon } from '@/components/icons/IconSet'

export function Location() {
  return (
    <section className="pt-24 pb-20 bg-bg-alt">
      <Container size="lg">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-3 flex justify-center">
            <CoffeeBeanIcon className="h-7 w-7 text-accent" />
          </div>
          <h1 className="font-display text-4xl font-bold">Visit Us</h1>
          <p className="mt-3 text-primary-muted">
            Find us in the heart of Portland's Pearl District
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Info */}
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
                  <h3 className="font-bold text-primary">Address</h3>
                  <p className="mt-1 text-primary-muted">
                    123 Coffee Street
                    <br />
                    Portland, OR 97201
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <PhoneIcon className="mt-1 h-6 w-6 text-accent" />
                <div>
                  <h3 className="font-bold text-primary">Phone</h3>
                  <p className="mt-1 text-primary-muted">(503) 555-0123</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ClockIcon className="mt-1 h-6 w-6 text-accent" />
                <div>
                  <h3 className="font-bold text-primary">Hours</h3>
                  <div className="mt-2 space-y-1.5">
                    {[
                      { day: 'Monday - Friday', hours: '7:00 AM - 7:00 PM' },
                      { day: 'Saturday', hours: '8:00 AM - 8:00 PM' },
                      { day: 'Sunday', hours: '8:00 AM - 4:00 PM' },
                    ].map((schedule) => (
                      <div key={schedule.day} className="flex justify-between">
                        <span className="text-primary-muted">{schedule.day}</span>
                        <span className="font-medium text-primary">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <motion.div
              className="rounded-xl bg-cream p-6 shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Badge variant="default" className="mb-3">
                Reserve a Table
              </Badge>
              <p className="mb-3 text-sm text-primary-muted">
                Planning a gathering? Book a table for your next coffee date or small event.
              </p>
              <a
                href="https://reserverd.app/hopworks?venue=brewbean"
                className="text-sm font-medium text-accent hover:underline"
              >
                Reserve now →
              </a>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.839205282148!2d-122.4194!3d45.5231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495215f91f5d1d5%3A0x1e9d2f8f6b5a7e8b!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Brew & Bean Coffee Shop location"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
