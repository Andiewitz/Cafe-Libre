export type TeamMember = {
  id: string
  name: string
  role: string
  bio: string
  image: string
}

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Rodriguez',
    role: 'Head Barista',
    bio: 'A certified Q-grader with over 10 years of experience, Alex sources beans directly from small-scale farmers.',
    image: '/src/assets/images/team-1.jpg',
  },
  {
    id: '2',
    name: 'Maya Patel',
    role: 'Roastery Manager',
    bio: 'Maya oversees our in-house roasting program, ensuring every batch reaches peak flavor profile.',
    image: '/src/assets/images/team-2.jpg',
  },
  {
    id: '3',
    name: 'Derek Kim',
    role: 'Head Pastry Chef',
    bio: 'Trained in Paris, Derek bakes fresh pastries daily using locally-sourced, organic ingredients.',
    image: '/src/assets/images/team-3.jpg',
  },
]
