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

const img = (name: string) => `/src/assets/images/${name}.jpg`

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Latte Supreme',
    description:
      'A velvety smooth experience featuring notes of caramel and dark chocolate, perfectly balanced with steamed micro-foam.',
    price: 6.5,
    category: 'coffee',
    image: img('latte-supreme'),
    popular: true,
    badges: ['Best Seller', 'Medium Roast'],
  },
  {
    id: '2',
    name: 'Espresso Dark',
    description: 'Intense, full-bodied shot.',
    price: 4.0,
    category: 'coffee',
    image: img('espresso-dark'),
  },
  {
    id: '3',
    name: 'Matcha Reserve',
    description: 'Ceremonial grade green tea.',
    price: 5.5,
    category: 'tea',
    image: img('matcha-reserve'),
  },
  {
    id: '4',
    name: 'Classic Espresso',
    description: 'Rich, velvety shot of pure coffee essence',
    price: 3.5,
    category: 'coffee',
    image: img('espresso'),
    popular: true,
  },
  {
    id: '5',
    name: 'Cappuccino',
    description: 'Espresso with steamed milk foam, finished with cocoa dust',
    price: 4.5,
    category: 'coffee',
    image: img('cappuccino'),
    popular: true,
  },
  {
    id: '6',
    name: 'Caramel Macchiato',
    description: 'Layered vanilla espresso with caramel drizzle',
    price: 5.25,
    category: 'coffee',
    image: img('macchiato'),
  },
  {
    id: '7',
    name: 'Mocha',
    description: 'Espresso with steamed milk and rich chocolate',
    price: 5.0,
    category: 'coffee',
    image: img('mocha'),
  },
  {
    id: '8',
    name: 'Earl Grey Lavender',
    description: 'Black tea with bergamot and culinary lavender',
    price: 3.75,
    category: 'tea',
    image: img('tea'),
  },
  {
    id: '9',
    name: 'Chamomile Dream',
    description: 'Soothing chamomile tea with a hint of honey',
    price: 3.25,
    category: 'tea',
    image: img('tea'),
  },
  {
    id: '10',
    name: 'Butter Croissant',
    description: 'Flaky, buttery French pastry baked fresh daily',
    price: 3.75,
    category: 'pastries',
    image: img('croissant'),
    popular: true,
  },
  {
    id: '11',
    name: 'Chocolate Chip Cookie',
    description: 'Warm, chewy cookie loaded with dark chocolate chips',
    price: 2.75,
    category: 'pastries',
    image: img('cookie'),
  },
  {
    id: '12',
    name: 'Cinnamon Roll',
    description: 'Swirled with house-made cinnamon and cream cheese glaze',
    price: 4.25,
    category: 'pastries',
    image: img('cinnamon'),
  },
  {
    id: '13',
    name: 'Iced Cold Brew',
    description: 'Smooth, slow-steeped coffee served over ice',
    price: 4.5,
    category: 'cold-drinks',
    image: img('cold-brew'),
    popular: true,
  },
  {
    id: '14',
    name: 'Iced Vanilla Latte',
    description: 'Espresso with cold milk and vanilla syrup over ice',
    price: 5.0,
    category: 'cold-drinks',
    image: img('latte'),
  },
  {
    id: '15',
    name: 'Sparkling Water',
    description: 'Chilled still or sparkling water with lemon',
    price: 2.5,
    category: 'cold-drinks',
    image: img('cold-brew'),
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
