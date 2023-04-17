import AuthPage from '../pages/AuthPage'
import DevPage from '../pages/DevPage'
import IndexPage from '../pages/IndexPage'
import OnBoardingPage from '../pages/OnBoardingPage'
import ProfilePage from '../pages/ProfilePage'
import RouteType from '../types/RouteType'

const router: RouteType[] = [
  {
    id: 0,
    path: '/on-boarding',
    component: OnBoardingPage,
  },
  {
    id: 1,
    path: '/auth',
    component: AuthPage,
  },
  {
    id: 2,
    path: '/',
    component: IndexPage,
  },
  {
    id: 3,
    path: '/dev',
    component: DevPage,
  },
  {
    id: 4,
    path: '/profile',
    component: ProfilePage,
  },
]

export default router
