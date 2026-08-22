const team1 =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
const team2 =
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
const team3 =
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'

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
    image: team1,
  },
  {
    id: '2',
    name: 'Maya Patel',
    role: 'Roastery Manager',
    bio: 'Maya oversees our in-house roasting program, ensuring every batch reaches peak flavor profile.',
    image: team2,
  },
  {
    id: '3',
    name: 'Derek Kim',
    role: 'Head Pastry Chef',
    bio: 'Trained in Paris, Derek bakes fresh pastries daily using locally-sourced, organic ingredients.',
    image: team3,
  },
]
