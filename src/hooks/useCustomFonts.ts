import { useFonts } from 'expo-font'

const useCustomFonts = () => {
  const [fonts] = useFonts({
    'Montserrat-Bold': require('../../assets/styles/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Semibold': require('../../assets/styles/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Medium': require('../../assets/styles/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('../../assets/styles/fonts/Montserrat-Regular.ttf'),
  })

  if (!fonts) {
    return false
  }

  return fonts
}

export default useCustomFonts
