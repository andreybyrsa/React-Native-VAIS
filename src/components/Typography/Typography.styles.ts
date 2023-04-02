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
   'text-1': {
      fontFamily: 'Montserrat-Regular',
   },
})

export default TypographyStyles