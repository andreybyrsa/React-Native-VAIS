import { fixedHeight } from '../../../assets/styles/mixins/mixins'
import { fixedWidth } from '../../../assets/styles/mixins/mixins'
import getCurrentColor from '../../utils/getCurrentColor'
import { StyleSheet, ViewStyle } from 'react-native'

const DefaultIconButton: ViewStyle = {
  ...fixedHeight({ size: 48 }),
  ...fixedWidth({ size: 48 }),
  borderRadius: 10,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const IconButtonStyles = StyleSheet.create({
  'icon-button': {
    ...DefaultIconButton,
  },
  'pressable-container': {
    width: '100%',
    height: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  'icon-button--primary': {
    backgroundColor: getCurrentColor('color-button-primary_enable'),
  },
  'icon-button-primary--active': {
    backgroundColor: getCurrentColor('color-button-primary_active'),
  },
  'icon-button-primary--disabled': {
    backgroundColor: getCurrentColor('color-button-primary_disable'),
  },

  'icon-button--secondary': {
    borderStyle: 'solid',
    borderWidth: 2,

    backgroundColor: getCurrentColor('color-button-secondary_enable'),
    borderColor: getCurrentColor('color-border-secondary_enable'),
  },
  'icon-button-secondary--active': {
    backgroundColor: getCurrentColor('color-button-secondary_active'),
    borderColor: getCurrentColor('color-border-secondary_active'),
  },
  'icon-button-secondary--disabled': {
    backgroundColor: getCurrentColor('color-button-secondary_disable'),
    borderStyle: 'solid',
    borderColor: getCurrentColor('color-border-secondary_enable'),
    borderWidth: 2,
  },

  'icon--primary': {
    color: getCurrentColor('color-icon-tertiary'),
  },
  'icon--primary-active': {
    color: getCurrentColor('color-icon-tertiary'),
  },
  'icon--secondary': {
    color: getCurrentColor('color-icon-secondary'),
  },
  'icon--secondary-active': {
    color: getCurrentColor('color-icon-primary'),
  },
})

export default IconButtonStyles
