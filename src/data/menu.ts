import espressoImg from '@/assets/images/espresso.jpg'
import cappuccinoImg from '@/assets/images/cappuccino.jpg'
import macchiatoImg from '@/assets/images/macchiato.jpg'
import mochaImg from '@/assets/images/mocha.jpg'
import latteImg from '@/assets/images/latte.jpg'
import matchaImg from '@/assets/images/matcha.jpg'
import teaImg from '@/assets/images/tea.jpg'
import croissantImg from '@/assets/images/croissant.jpg'
import cookieImg from '@/assets/images/cookie.jpg'
import cinnamonImg from '@/assets/images/cinnamon.jpg'
import coldBrewImg from '@/assets/images/cold-brew.jpg'

export type MenuItem = {
  id: string
  name: string
  description: string
  price: number
  category: 'coffee' | 'tea' | 'pastries' | 'cold-drinks'
  image: string
  popular?: boolean
  badges?: string[]
  origin?: string
  tastingNotes?: string[]
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Latte Supreme',
    description:
      'A velvety smooth experience featuring notes of caramel and dark chocolate, perfectly balanced with steamed micro-foam.',
    price: 6.5,
    category: 'coffee',
    image: latteImg,
    popular: true,
    badges: ['Best Seller', 'Medium Roast'],
  },
  {
    id: '2',
    name: 'Espresso Dark',
    description: 'Intense, full-bodied shot with rich crema and dark chocolate undertones.',
    price: 4.0,
    category: 'coffee',
    image: espressoImg,
  },
  {
    id: '3',
    name: 'Matcha Reserve',
    description: 'Ceremonial grade Japanese green tea whisked to smooth perfection.',
    price: 5.5,
    category: 'tea',
    image: matchaImg,
  },
  {
    id: '4',
    name: 'Classic Espresso',
    description: 'Rich, velvety shot of pure coffee essence',
    price: 3.5,
    category: 'coffee',
    image: espressoImg,
    popular: true,
  },
  {
    id: '5',
    name: 'Cappuccino',
    description: 'Espresso with steamed milk foam, finished with cocoa dust',
    price: 4.5,
    category: 'coffee',
    image: cappuccinoImg,
    popular: true,
  },
  {
    id: '6',
    name: 'Caramel Macchiato',
    description: 'Layered vanilla espresso with caramel drizzle',
    price: 5.25,
    category: 'coffee',
    image: macchiatoImg,
  },
  {
    id: '7',
    name: 'Mocha',
    description: 'Espresso with steamed milk and rich chocolate',
    price: 5.0,
    category: 'coffee',
    image: mochaImg,
  },
  {
    id: '8',
    name: 'Earl Grey Lavender',
    description: 'Black tea with bergamot and culinary lavender',
    price: 3.75,
    category: 'tea',
    image: teaImg,
  },
  {
    id: '9',
    name: 'Chamomile Dream',
    description: 'Soothing chamomile tea with a hint of honey',
    price: 3.25,
    category: 'tea',
    image: teaImg,
  },
  {
    id: '10',
    name: 'Butter Croissant',
    description: 'Flaky, buttery French pastry baked fresh daily',
    price: 3.75,
    category: 'pastries',
    image: croissantImg,
    popular: true,
  },
  {
    id: '11',
    name: 'Chocolate Chip Cookie',
    description: 'Warm, chewy cookie loaded with dark chocolate chips',
    price: 2.75,
    category: 'pastries',
    image: cookieImg,
  },
  {
    id: '12',
    name: 'Cinnamon Roll',
    description: 'Swirled with house-made cinnamon and cream cheese glaze',
    price: 4.25,
    category: 'pastries',
    image: cinnamonImg,
  },
  {
    id: '13',
    name: 'Iced Cold Brew',
    description: 'Smooth, slow-steeped coffee served over ice',
    price: 4.5,
    category: 'cold-drinks',
    image: coldBrewImg,
    popular: true,
  },
  {
    id: '14',
    name: 'Iced Vanilla Latte',
    description: 'Espresso with cold milk and vanilla syrup over ice',
    price: 5.0,
    category: 'cold-drinks',
    image: latteImg,
  },
  {
    id: '15',
    name: 'Sparkling Water',
    description: 'Chilled still or sparkling water with lemon',
    price: 2.5,
    category: 'cold-drinks',
    image: coldBrewImg,
  },
]

export const menuCategories = [
  { id: 'all', name: 'All Items' },
  { id: 'coffee', name: 'Coffee' },
  { id: 'tea', name: 'Tea' },
  { id: 'pastries', name: 'Pastries' },
  { id: 'cold-drinks', name: 'Cold Drinks' },
] as const

export function getMenuItemsByCategory(category: string): MenuItem[] {
  if (category === 'all') return menuItems
  return menuItems.filter((item) => item.category === category)
}

export const signatureBlends = [menuItems[0], menuItems[1], menuItems[2]]
