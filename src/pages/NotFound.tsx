import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { CoffeeBeanIcon } from '@/components/icons/IconSet'

export function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center pt-16">
      <Container size="md" className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, 0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            className="mb-8 flex justify-center"
          >
            <CoffeeBeanIcon className="h-20 w-20 text-accent opacity-30" />
          </motion.div>
          <h1 className="font-display text-6xl font-bold text-primary">404</h1>
          <h2 className="mt-2 font-display text-2xl text-charcoal">Page not found</h2>
          <p className="mt-4 text-primary-muted">
            The page you're looking for has gone missing — like the last cup of coffee on a Monday
            morning.
          </p>
          <Link to="/">
            <Button variant="primary" className="mt-6">
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
