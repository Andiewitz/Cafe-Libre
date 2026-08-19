import testimonial1 from '@/assets/images/testimonial-1.jpg'
import testimonial2 from '@/assets/images/testimonial-2.jpg'
import testimonial3 from '@/assets/images/testimonial-3.jpg'

export type Testimonial = {
  id: string
  name: string
  role: string
  content: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Regular since 2022',
    content:
      'The aroma alone is enough to make my mornings. Their single-origin pour-over is an orchestra of flavor.',
    avatar: testimonial1,
  },
  {
    id: '2',
    name: 'Marcus Rivera',
    role: 'Local Designer',
    content:
      "Brew & Bean isn't just a coffee shop—it's my creative sanctuary. The atmosphere is pure inspiration.",
    avatar: testimonial2,
  },
  {
    id: '3',
    name: 'Emma Thompson',
    role: 'First-time visitor',
    content:
      'The cinnamon roll is legendary, and watching the baristas craft each cup is a true art form.',
    avatar: testimonial3,
  },
]
