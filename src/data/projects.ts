import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Project {
  title: string
  description: string
  href?: string
  icon: IconProp
}

export const ProjectData: Project[] = [
  {
    title: 'efeasefe.wtf',
    description:
      "Life is good",
    href: 'https://github.com/efeasefe',
    icon: ['fas', 'home'],
  },
  {
    title: 'Shoto Music LLC',
    description:
      "My own record label",
    href: 'https://www.instagram.com/shotomusic.llc/',
    icon: ['fas', 'music'],
  },
  
]
