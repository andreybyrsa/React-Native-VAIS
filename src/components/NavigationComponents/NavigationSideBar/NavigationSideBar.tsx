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
  },
  {
    id: 1,
    iconName: 'ios-add-circle-outline',
    to: '/upload-look',
  },
  {
    id: 2,
    iconName: 'shirt-outline',
    to: '/looks-page',
  },
  {
    id: 3,
    iconName: 'ios-person-outline',
    to: '/profile',
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
        />
      ))}
    </View>
  )
}

export default NavigationSideBar
