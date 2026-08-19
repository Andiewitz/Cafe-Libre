import testimonial1 from '@/assets/images/testimonial-1.jpg'
import testimonial2 from '@/assets/images/testimonial-2.jpg'
import testimonial3 from '@/assets/images/testimonial-3.jpg'
import avatarCustomer from '@/assets/images/avatar-customer.jpg'
import avatarBarista from '@/assets/images/avatar-barista.jpg'

export type Testimonial = {
  id: string
  name: string
  role: string
  content: string
  rating: number
  favoriteBrew: string
  date: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Elena Rostova',
    role: 'Specialty Coffee Roaster',
    content:
      'The Obsidian Nitro is hands down the smoothest cold brew I have tasted. The 24-hour steep yields pure dark cacao and hazelnut with absolutely zero bitterness.',
    rating: 5,
    favoriteBrew: 'Obsidian Nitro Cold Brew',
    date: '2 days ago',
    avatar: testimonial1,
  },
  {
    id: '2',
    name: 'Marcus Vance',
    role: 'Daily Regular & Architect',
    content:
      'Brew Pod has redefined my morning ritual. The Highland Ember Americano has an extraordinary golden crema and natural floral notes that make sugar totally obsolete.',
    rating: 5,
    favoriteBrew: 'Highland Ember Americano',
    date: '1 week ago',
    avatar: testimonial2,
  },
  {
    id: '3',
    name: 'Sophia Laurent',
    role: 'Food & Beverage Critic',
    content:
      'Equal parts artisanal precision and welcoming soul. The Velvet Silk Cappuccino with organic Ceylon cinnamon micro-foam is pure velvety heaven in a cup.',
    rating: 5,
    favoriteBrew: 'Velvet Silk Cappuccino',
    date: '2 weeks ago',
    avatar: testimonial3,
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Software Engineer & Pour-Over Enthusiast',
    content:
      'I order their packaged Huila Sunrise Estate whole beans for my home espresso machine. Consistency, aroma, and flavor retention are world-class.',
    rating: 5,
    favoriteBrew: 'Huila Sunrise Whole Beans',
    date: '3 weeks ago',
    avatar: avatarCustomer,
  },
  {
    id: '5',
    name: 'Amara Chen',
    role: 'Creative Director',
    content:
      'From the aroma greeting you at the door to the handcrafted ceramic presentation, every detail here is curated with profound love for the craft.',
    rating: 5,
    favoriteBrew: 'Vanilla Blossom Blend',
    date: '1 month ago',
    avatar: avatarBarista,
  },
]
