import { fixedHeight } from '../../../../assets/styles/mixins/mixins'
import getCurrentColor from '../../../utils/getCurrentColor'
import { StyleSheet } from 'react-native'

const TextFieldStyles = StyleSheet.create({
  'text-field-wrapper': {
    width: '100%',
  },
  'text-field-label': {
    paddingHorizontal: 10,
    paddingBottom: 4,
  },
  'text-field-error': {
    paddingTop: 4,
    paddingHorizontal: 10,
  },
  'text-filed': {
    ...fixedHeight({ size: 44 }),
    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: 20,

    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    lineHeight: 24,

    flex: 1,
  },

  'text-field--primary': {
    backgroundColor: getCurrentColor('color-input-primary'),
  },
  'text-field--secondary': {
    backgroundColor: getCurrentColor('color-input-secondary'),
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: getCurrentColor('color-border-secondary_enable'),

    color: getCurrentColor('color-text-secondary'),
  },
  'text-field--required': {
    backgroundColor: getCurrentColor('color-input-primary_error'),
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: getCurrentColor('color-border-primary_error'),
  },
})

export default TextFieldStyles
