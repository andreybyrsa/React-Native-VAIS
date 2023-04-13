import { fixedHeight } from '../../../assets/styles/mixins/mixins';
import { fixedWidth } from '../../../assets/styles/mixins/mixins';
import getCurrentColor from '../../utils/getCurrentColor';
import { StyleSheet } from 'react-native';

const IconButtonStyles = StyleSheet.create({
  'iconButton--primary': {
    ...fixedHeight({ size: 48 }),
    ...fixedWidth({ size: 48 }),
    backgroundColor: getCurrentColor('color-button-primary_enable'),
  },
})

export default IconButtonStyles