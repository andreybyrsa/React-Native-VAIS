import ModalTypes from '../../../types/ModalTypes'
import React from 'react'

interface DefaultModalProps extends ModalTypes {
  children: React.ReactNode

  animationType?: 'slide' | 'fade'
}

export default DefaultModalProps
