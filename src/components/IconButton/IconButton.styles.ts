import { fixedHeight } from '../../../assets/styles/mixins/mixins';
import { fixedWidth } from '../../../assets/styles/mixins/mixins';
import getCurrentColor from '../../utils/getCurrentColor';
import { StyleSheet } from 'react-native';

const IconButtonStyles = StyleSheet.create({
  'iconButton--primary': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 10,
    ...fixedHeight({ size: 48 }),
    ...fixedWidth({ size: 48 }),

    backgroundColor: getCurrentColor('color-button-primary_enable'),
  },
  'iconButton--primary-active': {
    backgroundColor: getCurrentColor('color-button-primary_active'),
  },
  'icon--primary': {
    color: getCurrentColor('color-icon-tertiary'),
  },
  'icon--primary-active': {
    color: getCurrentColor('color-icon-tertiary'),
  },

  'iconButton--secondary': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 10,
    borderWidth: 2,
    ...fixedHeight({ size: 48 }),
    ...fixedWidth({ size: 48 }),

    backgroundColor: getCurrentColor('color-button-secondary_enable'),
    borderColor: getCurrentColor('color-border-secondary_enable'),
  },
  'iconButton--secondary-active': {
    backgroundColor: getCurrentColor('color-button-secondary_active'),
    borderColor: getCurrentColor('color-border-secondary_active'),
  },
  'icon--secondary': {
    color: getCurrentColor('color-icon-secondary'),
  },
  'icon--secondary-active': {
    color: getCurrentColor('color-icon-primary'),
  },
})

export default IconButtonStyles