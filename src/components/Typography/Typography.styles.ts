import { CurrentColors } from '../../../assets/styles/colors/colors'
import TypographyVariants from '../../../assets/styles/typography/typography'
import { StyleSheet } from 'react-native'

const TypographyStyles = StyleSheet.create({
  ...TypographyVariants,
  ...CurrentColors,
})

export default TypographyStyles
