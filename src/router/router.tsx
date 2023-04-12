import DevPage from '../pages/DevPage'
import IndexPage from '../pages/IndexPage'
import OnBoardingPage from '../pages/OnBoardingPage'
import RouteType from '../types/RouteType'

const router: RouteType[] = [
  {
    id: 0,
    path: '/dev',
    component: DevPage,
  },
  {
    id: 1,
    path: '/on-boarding',
    component: OnBoardingPage,
  },
  {
    id: 2,
    path: '/',
    component: IndexPage,
  },
]

export default router
