// import * as React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import MapScreen from './screens/MapScreen'
// import HomeScreen from './screens/HomeScreen'
// import LoginScreen from './screens/LoginScreen'
// import AppLoading from 'expo-app-loading';
// import { useFonts,   } from '@expo-google-fonts/inter';




// const Drawer = createDrawerNavigator();



// export default function App() {
//     let [fontsLoaded] = useFonts({
//     'Lexa-Mega' : require('./assets/fonts/LexendMega-Regular.ttf')
//   });
  
//   if (!fontsLoaded) {
//     return <AppLoading />;
//   }

//   return(
//     <LoginScreen Drawer = {Drawer}/>
//   )
// }



import React, {useContext} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppLoading from 'expo-app-loading';
import { useFonts,} from '@expo-google-fonts/inter';
import GlobalProvider from './context/Provider';
import Index from './screens/Index';

const Drawer = createDrawerNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({
    'Lexa-Mega' : require('./assets/fonts/LexendMega-Regular.ttf')
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  

  return(
    <GlobalProvider>
          <Index Drawer = {Drawer}/>
    </GlobalProvider>

  )
}







