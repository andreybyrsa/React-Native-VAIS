import IconComponent from '../../IconComponent'
import Typography from '../../Typography'
import NavigationTabStyles from './NavigationTab.styles'
import NavigationTabProps from './NavigationTab.types'
import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { TouchableHighlight } from 'react-native'
import { View } from 'react-native'

function NavigationTab({ style, to, iconName, navigationName }: NavigationTabProps) {
  const navigation = useNavigation()
  const router = useRoute()

  const getCurrentNavigationColor = (currentComponent: string) => {
    if (currentComponent === 'icon') {
      return router.name === to ? 'color-icon-tertiary' : 'color-icon-primary'
    } else {
      return router.name === to ? 'color-text-tertiary' : 'color-text-primary'
    }
  }

  return (
    <TouchableHighlight
      style={[NavigationTabStyles['navigation-tab'], style]}
      activeOpacity={1}
      underlayColor="transparent"
      onPress={() => navigation.navigate(to as never)}
    >
      <View style={NavigationTabStyles['navigation-tab__button']}>
        <IconComponent
          iconName={iconName}
          size={30}
          color={getCurrentNavigationColor('icon')}
        />
        <Typography
          variant="text-6"
          color={getCurrentNavigationColor('text')}
        >
          {navigationName}
        </Typography>
      </View>
    </TouchableHighlight>
  )
}

export default NavigationTab
