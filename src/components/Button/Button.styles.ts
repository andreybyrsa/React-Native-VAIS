import { StyleSheet, ViewStyle } from 'react-native'

const DefaultButton: ViewStyle = {
  width: '100%',
  height: 48,
  minHeight: 48,
  maxHeight: 48,
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
    backgroundColor: '#264A5A',
  },
  'button--secondary': {
    backgroundColor: '#02202B',
    borderStyle: 'solid',
    borderColor: '#00E4FF',
    borderWidth: 2,
  },
  'button-primary--disabled': {
    backgroundColor: '#7496A6',
  },
  'button-secondary--disabled': {
    backgroundColor: '#7496A6',
    borderStyle: 'solid',
    borderColor: '#00E4FF',
    borderWidth: 2,
  },

  'button-primary--active': {
    backgroundColor: '#02202B',
  },
  'button-secondary--active': {
    backgroundColor: '#FFFFFF',
    borderStyle: 'solid',
    borderColor: '#02202B',
    borderWidth: 2,
  },

  'button__text-primary': {
    color: '#FFFFFF',
  },
  'button__text-secondary': {
    color: '#00E4FF',
  },

  'button__text-primary--active': {
    color: '#FFFFFF',
  },
  'button__text-secondary--active': {
    color: '#02202B',
  },
})

export default ButtonStyes
