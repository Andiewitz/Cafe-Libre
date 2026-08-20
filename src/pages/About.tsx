import { motion } from 'framer-motion'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { CoffeeBeanIcon, LeafIcon, BookIcon } from '@/components/icons/IconSet'
import { team } from '@/data/team'
import { cn } from '@/utils/cn'

export function About() {
  return (
    <section className="pt-32 pb-20 bg-[#F6EDE2] min-h-screen text-[#2E170C]">
      <Container size="lg">
        {/* Hero */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-3 flex justify-center">
            <CoffeeBeanIcon className="h-7 w-7 text-accent" />
          </div>
          <h1 className="font-hero text-4xl sm:text-5xl font-normal text-[#2E170C]">Our Coffee Craft</h1>
          <p className="mt-3 max-w-2xl mx-auto text-[#5D4233]">
            From ethical direct-trade farm partnerships to small-batch single origin perfection.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-1/2 -ml-px h-full w-0.5 bg-light-gray md:block" />
          <div className="space-y-12">
            {[
              {
                year: '2019',
                title: 'The Beginning',
                desc: 'Café Libre opened its first location as a small kiosk with a dream.',
              },
              {
                year: '2021',
                title: 'Roastery Expansion',
                desc: 'We launched our in-house roastery to control every aspect of flavor.',
              },
              {
                year: '2023',
                title: 'Community Hub',
                desc: 'Opened our second location and hosted over 100 community events.',
              },
              {
                year: '2025',
                title: 'Sustainability Focus',
                desc: 'Achieved carbon-neutral certification and direct trade partnerships.',
              },
            ].map((milestone, i) => (
              <motion.div
                key={milestone.year}
                className="relative flex items-center md:items-start"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div
                  className={cn(
                    'absolute left-1/2 mt-2 -ml-2 h-4 w-4 -translate-x-1/2 rounded-full bg-accent',
                    'md:relative md:translate-x-0',
                  )}
                />
                <div
                  className={cn(
                    'w-full text-center md:w-1/2 md:text-right md:pr-8',
                    i % 2 === 0 && 'md:text-right md:pr-8 md:pl-0',
                    i % 2 === 1 && 'md:pl-8 md:text-left',
                  )}
                >
                  <Badge variant="secondary" className="mb-2">
                    {milestone.year}
                  </Badge>
                  <h3 className="font-display text-xl font-bold text-primary">{milestone.title}</h3>
                  <p className="mt-1 text-sm text-primary-muted">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <motion.div
          className="mb-20 rounded-3xl bg-bg-alt p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-center text-2xl font-bold text-primary">Our Mission</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-primary-muted">
            At Café Libre, we believe great coffee should be accessible, ethical, and
            community-driven. Every bean we source supports small farmers, every cup we brew tells a
            story, and every corner of our shop invites you to slow down and savor.
          </p>
          <div className="mt-8 flex justify-center gap-8">
            <div className="flex items-center gap-3">
              <LeafIcon className="h-8 w-8 text-accent" />
              <span className="text-sm text-primary-muted">100% Ethically Sourced</span>
            </div>
            <div className="flex items-center gap-3">
              <CoffeeBeanIcon className="h-8 w-8 text-accent" />
              <span className="text-sm text-primary-muted">Small-Batch Roasted</span>
            </div>
            <div className="flex items-center gap-3">
              <BookIcon className="h-8 w-8 text-accent" />
              <span className="text-sm text-primary-muted">Locally Owned</span>
            </div>
          </div>
        </motion.div>

        {/* Team */}
        <div>
          <motion.h2
            className="mb-10 text-center font-display text-2xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                className="group relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-64 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                  <h3 className="font-bold text-xl">{member.name}</h3>
                  <p className="text-accent">{member.role}</p>
                  <p className="mt-2 text-sm opacity-80">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
