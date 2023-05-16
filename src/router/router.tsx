import AuthPage from '../pages/AuthPage'
import DevPage from '../pages/DevPage'
import FavouritesLooksPage from '../pages/FavouritesLooksPage'
import IndexPage from '../pages/IndexPage'
import OnBoardingPage from '../pages/OnBoardingPage'
import PhoneConfirmPage from '../pages/PhoneConfirmPage'
import ProfilePage from '../pages/ProfilePage'
import UploadLookPage from '../pages/UploadLookPage'
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
    path: '/upload-look',
    component: UploadLookPage,
  },
  {
    id: 5,
    path: '/profile',
    component: ProfilePage,
  },
  {
    id: 6,
    path: '/favourites',
    component: FavouritesLooksPage,
  },
  {
    id: 7,
    path: '/dev',
    component: DevPage,
  },
]

export default router
