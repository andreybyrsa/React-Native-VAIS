import NavLinkType from '../../../types/NavLinkType'
import NavigationTab from '../NavigationTab'
import NavigationSideBarStyles from './NavigationSideBar.styles'
import NavigationSideBarProps from './NavigationSideBar.types'
import { View } from 'react-native'

const navLinks: NavLinkType[] = [
  {
    id: 0,
    iconName: 'home-outline',
    to: '/',
    navigationName: 'Главная',
  },
  {
    id: 1,
    iconName: 'ios-add-circle-outline',
    to: '/upload-look',
    navigationName: 'Нейросеть',
  },
  {
    id: 2,
    iconName: 'shirt-outline',
    to: '/looks',
    navigationName: 'Одежда',
  },
  {
    id: 3,
    iconName: 'ios-person-outline',
    to: '/profile',
    navigationName: 'Профиль',
  },
]

function NavigationSideBar({ style }: NavigationSideBarProps) {
  return (
    <View style={[NavigationSideBarStyles['navigation-side-bar'], style]}>
      {navLinks.map((elem) => (
        <NavigationTab
          key={elem.id}
          iconName={elem.iconName}
          to={elem.to}
          navigationName={elem.navigationName}
        />
      ))}
    </View>
  )
}

export default NavigationSideBar
