import React, { SetStateAction } from 'react'
import ModalTypes from '../../../types/ModalTypes'

interface FilterModalProps extends ModalTypes {
  activeFilter: number | null
  setActiveFilter: React.Dispatch<SetStateAction<number | null>>
}

export default FilterModalProps
