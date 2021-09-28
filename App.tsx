import React from 'react';

import theme from './src/theme/theme';

/**
 *
 * Expo
 */
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

/**
 *
 * Styled components
 */
import {
   ThemeProvider
} from 'styled-components';

/**
 *
 * Screens
 */
import News from './src/screens/News';

export default function App() {

   const [ fontsLoaded, error ] = useFonts({
      'Bozon-Bold': require('./assets/fonts/Bozon-Bold.ttf'),
      'Bozon-Medium': require('./assets/fonts/Bozon-DemiBold.ttf'),
      'Bozon-Regular': require('./assets/fonts/Bozon-Regular.ttf'),
   });

   if (!fontsLoaded) {
      return <AppLoading/>
   }

   if (error) {
      alert('Não foi possível carregar as fontes.');
   }

   return (
      <ThemeProvider theme={theme}>
         <News/>
      </ThemeProvider>
   );
}