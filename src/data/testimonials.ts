const testimonial1 = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
const testimonial2 = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
const testimonial3 = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80'
const avatarCustomer = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
const avatarBarista = 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=400&q=80'

export type Testimonial = {
  id: string
  name: string
  badge: string
  content: string
  rating: number
  date: string
  avatar: string
  likes: number
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Elena Rostova',
    badge: 'Local Guide • 42 reviews',
    content:
      'My absolute favorite coffee shop in the neighborhood! The nitro cold brew on tap is velvety and rich with zero bitterness. Incredible aesthetic, warm wooden interiors, and the baristas remember your name after two visits.',
    rating: 5,
    date: '3 days ago',
    avatar: testimonial1,
    likes: 18,
  },
  {
    id: '2',
    name: 'Marcus Vance',
    badge: 'Local Guide • 86 reviews',
    content:
      'The espresso here is genuinely exceptional. You can taste the single-origin notes and the crema is thick and golden. Plenty of seating, good jazz playing at the right volume, and fast Wi-Fi if you need to work.',
    rating: 5,
    date: '1 week ago',
    avatar: testimonial2,
    likes: 24,
  },
  {
    id: '3',
    name: 'Sophia Laurent',
    badge: '18 reviews • 9 photos',
    content:
      'The cappuccino with fresh micro-foam and raw cinnamon is perfection. Pastries are warm and flaky every single morning. This place is a breath of fresh air!',
    rating: 5,
    date: '2 weeks ago',
    avatar: testimonial3,
    likes: 12,
  },
  {
    id: '4',
    name: 'David Kim',
    badge: 'Local Guide • 112 reviews',
    content:
      'Grabbed a bag of their freshly roasted whole beans and an iced americano. Outstanding roast profile. If you care about real coffee craftsmanship, this is the spot to be.',
    rating: 5,
    date: '3 weeks ago',
    avatar: avatarCustomer,
    likes: 9,
  },
  {
    id: '5',
    name: 'Amara Chen',
    badge: '29 reviews • 14 photos',
    content:
      'Such a cozy, high-vibe atmosphere. Great light for reading, wonderful aroma when you step in, and staff who are genuinely passionate about coffee.',
    rating: 5,
    date: '1 month ago',
    avatar: avatarBarista,
    likes: 15,
  },
  {
    id: '6',
    name: 'Liam Gallagher',
    badge: 'Local Guide • 64 reviews',
    content:
      'Five stars all the way. Top tier pour-overs, artisan cups, and the friendliest crew. Hands down best coffee in town.',
    rating: 5,
    date: '1 month ago',
    avatar: testimonial1,
    likes: 21,
  },
]
