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



import * as React from 'react';
import {Image, StyleSheet, Text} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MapScreen from './screens/MapScreen'
import UploadScreen from './screens/UploadScreen'
import TrackingScreen from './screens/TrackingScreen'
import FavoriteScreen from './screens/FavoriteScreen'
import LoginScreen from './screens/LoginScreen'
import AppLoading from 'expo-app-loading';
import SideBar from './components/Navigation/SideBar'
import { useFonts,   } from '@expo-google-fonts/inter';
import { Ionicons } from '@expo/vector-icons';
import MapLogo from './components/Logos/MapLogo';
import TrackingLogo from './components/Logos/TrackingLogo';
import UploadLogo from './components/Logos/UploadLogo';
import FavoritesLogo from './components/Logos/FavoritesLogo';
import Navigator from './components/Navigation/Navigator';
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







