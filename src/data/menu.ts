const espressoImg = 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80'
const cappuccinoImg = 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80'
const macchiatoImg = 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80'
const mochaImg = 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=800&q=80'
const latteImg = 'https://images.unsplash.com/photo-1534687941688-6a1ae15a2e6f?auto=format&fit=crop&w=800&q=80'
const matchaImg = 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80'
const teaImg = 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80'
const croissantImg = 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80'
const cookieImg = 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80'
const cinnamonImg = 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80'
const coldBrewImg = 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80'

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
