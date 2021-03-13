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
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import AppLoading from 'expo-app-loading';
import SideBar from './components/SideBar'
import { useFonts,   } from '@expo-google-fonts/inter';
import { Ionicons } from '@expo/vector-icons';
import MapLogo from './components/Logos/MapLogo';
import TrackingLogo from './components/Logos/TrackingLogo';
import UploadLogo from './components/Logos/UploadLogo';
import FavoritesLogo from './components/Logos/FavoritesLogo';

const Drawer = createDrawerNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({
    'Lexa-Mega' : require('./assets/fonts/LexendMega-Regular.ttf')
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return(
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Mapa" drawerContentOptions = {{ activeTintColor: '#BACEE8', labelStyle:{fontFamily:'Lexa-Mega', fontSize : 16, color:'black'}}}drawerContent={props => <SideBar {...props} />}>
        <Drawer.Screen name='Mapa' component={MapScreen} options ={{
          drawerIcon:() => (
            <MapLogo width ={50} height = {50}/>
          )
        }}/>
        <Drawer.Screen name="Uploads" component={UploadScreen} options ={{
          drawerIcon:() => (
            <UploadLogo width ={50} height = {50}/>
          )
        }}/>
        <Drawer.Screen name="Tracking" component={TrackingScreen} options ={{
          drawerIcon:() => (
            <TrackingLogo width ={50} height = {50}/>
          )
        }}/>
        <Drawer.Screen name="Favoritos" component={FavoriteScreen} options ={{
          drawerIcon:() => (
            <FavoritesLogo width ={50} height = {50}/>
          )
        }}/>
    </Drawer.Navigator>
  </NavigationContainer>
  )
}







