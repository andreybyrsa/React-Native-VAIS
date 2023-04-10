import DevPage from '../pages/DevPage'
import IndexPage from '../pages/IndexPage'
import RouteType from '../types/RouteType'

const router: RouteType[] = [
  {
    id: 0,
    path: '/dev',
    component: DevPage,
  },
  {
    id: 1,
    path: '/',
    component: IndexPage,
  },
]

export default router
