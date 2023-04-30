import AuthPage from '../pages/AuthPage';
import DevPage from '../pages/DevPage';
import IndexPage from '../pages/IndexPage';
import OnBoardingPage from '../pages/OnBoardingPage';
import PhoneConfirmPage from '../pages/PhoneConfirmPage';
import ProfilePage from '../pages/ProfilePage';
import RouteType from '../types/RouteType';


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
    path: '/phone-confirm',
    component: PhoneConfirmPage,
  },
  {
    id: 3,
    path: '/',
    component: IndexPage,
  },
  {
    id: 4,
    path: '/profile',
    component: ProfilePage,
  },
  {
    id: 5,
    path: '/dev',
    component: DevPage,
  },
]

export default router