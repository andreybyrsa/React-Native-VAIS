import { StyleSheet } from "react-native";
import * as Font from 'expo-font';
// import { useFonts } from 'expo-font';

// async function componentDidMount() {
//    await Font.loadAsync({
//       'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
//       'Montserrat-Semibold': require('./assets/fonts/Montserrat-Semibold.ttf'),
//       'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
//       'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
//    });
// }

// const [fontsLoaded] = useFonts({
//    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
//       'Montserrat-Semibold': require('./assets/fonts/Montserrat-Semibold.ttf'),
//       'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
//       'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
//  });

//  const onLayoutRootView = useCallback(async () => {
//    if (fontsLoaded) {
//      await SplashScreen.hideAsync();
//    }
//  }, [fontsLoaded]);

//  if (!fontsLoaded) {
//    return null;
//  }

const TypographyStyles = StyleSheet.create({
   'title-1':{
      fontFamily: 'Montserrat-Bold',
      fontSize: 32,
      lineHeight: 40,
   },
   'title-2':{
      fontFamily: 'Montserrat-Semibold',
      fontSize: 24,
      lineHeight: 32,
   },
   'title-3':{
      fontFamily: 'Montserrat-Medium',
      fontSize: 20,
      lineHeight: 26,
   },
   'title-4':{
      fontFamily: 'Montserrat-Medium',
      fontSize: 14,
      lineHeight: 20,
   },
   'title-5':{
      fontFamily: 'Montserrat-Medium',
      fontSize: 12,
      lineHeight: 16,
   },
   'title-6':{
      fontFamily: 'Montserrat-Semibold',
      fontSize: 12,
      lineHeight: 16,
   },
   'title-7':{
      fontFamily: 'Montserrat-Semibold',
      fontSize: 10,
      lineHeight: 14,
   },
   'text-1': {
      fontFamily: 'Montserrat-Regular',
      fontSize: 20,
      lineHeight: 24,
   },
   'text-2': {
      fontFamily: 'Montserrat-Medium',
      fontSize: 16,
      lineHeight: 20,
   },
   'text-3': {
      fontFamily: 'Montserrat-Medium',
      fontSize: 16,
      lineHeight: 22,
   },
   'text-4': {
      fontFamily: 'Montserrat-Regular',
      fontSize: 14,
      lineHeight: 22,
   },
   'text-5': {
      fontFamily: 'Montserrat-Medium',
      fontSize: 12,
      lineHeight: 20,
   },
   'text-6': {
      fontFamily: 'Montserrat-Semibold',
      fontSize: 10,
      lineHeight: 12,
   },
})

export default TypographyStyles