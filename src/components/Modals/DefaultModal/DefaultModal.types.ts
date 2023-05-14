import React, { SetStateAction } from 'react';


interface DefaultModalProps {
  opened: boolean
  setOpened: React.Dispatch<SetStateAction<boolean>>

  children: React.ReactNode

  animationType?: 'slide' | 'fade'
}

export default DefaultModalProps