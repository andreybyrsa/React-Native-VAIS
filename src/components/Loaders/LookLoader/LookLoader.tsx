import {
  lookLoaderBackground__active,
  lookLoaderBackground__enabled,
} from '../../../../assets/images'
import { gear } from '../../../../assets/images'
import ImageComponent from '../../ImageComponent'
import LookLoaderStyles from './LookLoader.styles'
import React from 'react'
import { useEffect, useRef } from 'react'
import {
  Animated,
  Easing,
  ImageBackground,
  ImageSourcePropType,
  View,
} from 'react-native'

const LookLoader = () => {
  const iconAnim = useRef(new Animated.Value(0)).current
  const backgroundAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.loop(
      Animated.timing(iconAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ).start()
  }, [iconAnim])

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(backgroundAnim, {
          toValue: 1,
          duration: 2500,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(backgroundAnim, {
          toValue: 0,
          duration: 2500,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ]),
    ).start()
  }, [backgroundAnim])

  const rotate = iconAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })

  return (
    <View>
      <ImageBackground
        source={lookLoaderBackground__enabled as ImageSourcePropType}
        style={[LookLoaderStyles['lookLoaderBackground__enabled']]}
      />
      <Animated.View
        style={{
          opacity: backgroundAnim,
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      >
        <ImageBackground
          source={lookLoaderBackground__active as ImageSourcePropType}
          style={[LookLoaderStyles['lookLoaderBackground__active']]}
        />
      </Animated.View>
      <Animated.View
        style={{
          transform: [{ rotate }],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <ImageComponent
          style={{ width: 150, height: 150 }}
          imageSrc={gear}
          alt="logo"
        />
      </Animated.View>
    </View>
  )
}

export default LookLoader
