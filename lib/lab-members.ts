export const labMembers: LabMember[] = [
  {
    name: 'Carlos De La Cruz',
    role: 'Lead Developer & Coordinator',
    bio: 'Ex competitive gamer turned software engineer. I utilize web technologies to solve complex problems and enjoy activities like snowboarding and BJJ.',
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
    image: '/team/gichuljaun.jpg',
    linkedIn: 'https://www.linkedin.com/in/gichuljaun/',
    website: 'https://gichul-j.com/',
  },
  {
    name: 'Leslie Cui',
    role: 'Student Developer',
    program: 'Software Engineering Technology',
    bio: 'Software Engineering Technology',
    image: '/team/leslie.JPG',
    linkedIn: 'www.linkedin.com/in/leslie-lc',
    website: 'https://leslie-gitt.github.io',
  },
  {
    name: 'Naomi Lopez Mendoza',
    role: 'Student Developer',
    bio: 'Game Programming',
    program: 'Game Programming',
    image: '/team/naomi.jpg',
    linkedIn: 'https://www.linkedin.com/in/nmendo16/',
    website: 'https://naomilopez19.wixsite.com/naomisportfolio',
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
