import React, { useState } from 'react'
import { StyleSheet, Text, Animated } from 'react-native'
import LookLoaderProps from './LookLoader.types'
import { useRef, useEffect } from 'react';
// import { RotateInDownRight } from 'react-native-reanimated';

const LookLoader = ({children}: LookLoaderProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start()
  }, [fadeAnim])

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        // transform: RotateTransform 
      }}
    >
      {children}
    </Animated.View>
  )
}

export default LookLoader
