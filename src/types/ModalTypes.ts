import React, { SetStateAction } from 'react'

interface ModalTypes {
  opened: boolean
  setOpened: React.Dispatch<SetStateAction<boolean>>
}

export default ModalTypes
