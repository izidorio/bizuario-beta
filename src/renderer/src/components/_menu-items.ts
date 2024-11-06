import { Home, Inbox, Settings } from 'lucide-react'

interface Item {
  title: string
  path: string
  icon: React.ComponentType<{ className?: string }>

  subItems?: {
    title: string
    path: string
  }[]
}

export const items: Item[] = [
  {
    title: 'Home',
    path: '/home',
    icon: Home
  },
  {
    title: 'Sobre',
    path: '/about',
    icon: Inbox
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: Settings,
    subItems: [
      {
        title: 'Customizar',
        path: '/settings/customize'
      },
      {
        title: 'Atualizar',
        path: '/settings/atualizar'
      }
    ]
  }
]
