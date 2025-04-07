export const labMembers: LabMember[] = [
  {
    name: 'Carlos De La Cruz',
    role: 'Lead Developer & Coordinator',
    bio: 'Ex-competitive gamer turned software engineer. I love to solve complex problems and outdoor activities like snowboarding and surfing.',
    program: 'Software Engineering Technology - AI',
    image: '/team/carlosdelacruz.png',
    website: 'https://heyimcarlos.dev',
    linkedIn: 'https://www.linkedin.com/in/carlos-dev/',
    github: 'https://github.com/heyimcarlos',
  },
  {
    name: 'Gichul Jaun',
    role: 'Student Developer',
    bio: 'Software Engineering Technology - AI',
    program: 'Software Engineering Technology - AI',
    website: 'https://gichul-j.com/',
    image: '/team/gichuljaun.jpg',
    linkedIn: 'https://www.linkedin.com/in/gichuljaun/',
    github: 'https://github.com/gichul0317',
  },
  {
    name: 'Leslie Cui',
    role: 'Student Developer',
    program: 'Software Engineering Technology',
    bio: 'Software Engineering Technology',
    image: '/team/leslie.JPG',
    website: 'https://leslie-gitt.github.io',
    linkedIn: 'www.linkedin.com/in/leslie-lc',
    github: 'https://github.com/Leslie-gitt',
  },
  {
    name: 'Naomi Lopez Mendoza',
    role: 'Student Developer',
    bio: 'Game Programming',
    program: 'Game Programming',
    image: '/team/naomi.jpg',
    website: 'https://naomilopez19.wixsite.com/naomisportfolio',
    linkedIn: 'https://www.linkedin.com/in/nmendo16/',
    github: 'https://github.com/nmendo16',
  },
]

export type LabMember = {
  name: string
  bio: string
  program: string
  role: string
  image: string
  website?: string
  linkedIn?: string
  github?: string
}
