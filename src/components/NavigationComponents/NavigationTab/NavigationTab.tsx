import IconComponent from '../../IconComponent'
import NavigationTabStyles from './NavigationTab.styles'
import NavigationTabProps from './NavigationTab.types'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { TouchableHighlight } from 'react-native'

function NavigationTab({ style, to, iconName }: NavigationTabProps) {
  const [isPressed, setIsPressed] = useState<boolean>(false)
  const navigation = useNavigation()

  const onHandlerFocus = () => {
    setIsPressed(true)
  }
  const onHandlerBlur = () => {
    setIsPressed(false)
  }

  return (
    <TouchableHighlight
      style={[NavigationTabStyles['navigation-tab'], style]}
      activeOpacity={1}
      underlayColor="transparent"
      onPress={() => navigation.navigate(to as never)}
      onHideUnderlay={onHandlerBlur}
      onShowUnderlay={onHandlerFocus}
    >
      <IconComponent
        iconName={iconName}
        size={38}
        color={isPressed ? 'color-icon-primary' : 'color-icon-tertiary'}
      />
    </TouchableHighlight>
  )
}

export default NavigationTab
