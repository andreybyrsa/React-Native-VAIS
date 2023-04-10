import DevPage from '../pages/DevPage'
import IndexPage from '../pages/IndexPage'
import PageTypes from '../types/PageTypes'

interface RouteTypes {
  id: number
  path: string
  component: ({ navigation }: PageTypes) => JSX.Element
}

const router: RouteTypes[] = [
  {
    id: 1,
    path: '/dev',
    component: DevPage,
  },
  {
    id: 0,
    path: '/',
    component: IndexPage,
  },
]

export default router
