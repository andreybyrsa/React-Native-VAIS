import { fixedHeight } from '../../../assets/styles/mixins/mixins'
import getCurrentColor from '../../utils/getCurrentColor'
import { StyleSheet, ViewStyle } from 'react-native'

const DefaultButton: ViewStyle = {
  width: '100%',
  ...fixedHeight({ size: 48 }),
  borderRadius: 10,
}

const ButtonStyes = StyleSheet.create({
  button: {
    ...DefaultButton,
  },
  'pressable-container': {
    width: '100%',
    height: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  'button--primary': {
    backgroundColor: getCurrentColor('color-button-primary_enable'),
  },
  'button--secondary': {
    backgroundColor: getCurrentColor('color-button-secondary_enable'),
    borderStyle: 'solid',
    borderColor: getCurrentColor('color-border-secondary_enable'),
    borderWidth: 2,
  },
  'button-primary--disabled': {
    backgroundColor: getCurrentColor('color-button-primary_disable'),
  },
  'button-secondary--disabled': {
    backgroundColor: getCurrentColor('color-button-secondary_disable'),
    borderStyle: 'solid',
    borderColor: getCurrentColor('color-border-secondary_enable'),
    borderWidth: 2,
  },

  'button-primary--active': {
    backgroundColor: getCurrentColor('color-button-primary_active'),
  },
  'button-secondary--active': {
    backgroundColor: getCurrentColor('color-button-secondary_active'),
    borderStyle: 'solid',
    borderColor: getCurrentColor('color-border-secondary_active'),
    borderWidth: 2,
  },

  'button__text-primary': {
    color: getCurrentColor('color-text-tertiary'),
  },
  'button__text-secondary': {
    color: getCurrentColor('color-text-secondary'),
  },

  'button__text-primary--active': {
    color: getCurrentColor('color-text-tertiary'),
  },
  'button__text-secondary--active': {
    color: getCurrentColor('color-text-primary'),
  },
})

export default ButtonStyes
