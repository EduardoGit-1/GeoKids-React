import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SideBar from './SideBar'
import MapScreen from '../../screens/MapScreen'
import UploadScreen from '../../screens/UploadScreen'
import TrackingScreen from '../../screens/TrackingScreen'
import FavoriteScreen from '../../screens/FavoriteScreen'
import OpinionScreen from '../../screens/OpinionScreen'
import MapLogo from '../Logos/MapLogo';
import TrackingLogo from '../Logos/TrackingLogo';
import UploadLogo from '../Logos/UploadLogo';
import FavoritesLogo from '../Logos/FavoritesLogo';
import OpinionLogo from '../Logos/OpinionLogo';



const Navigator = ({Drawer}) => {
  return(
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Mapa" drawerContentOptions = {{ activeTintColor: '#BACEE8', labelStyle:{fontFamily:'Lexa-Mega', fontSize : 16, color:'black'}}}drawerContent={props => <SideBar {...props} />}>
        <Drawer.Screen name='Mapa' component={MapScreen} options ={{
          drawerIcon:() => (
            <MapLogo width ={50} height = {50}/>
          )
        }}/>
        <Drawer.Screen name="Percursos" component={TrackingScreen} options ={{
          drawerIcon:() => (
            <TrackingLogo width ={50} height = {50}/>
          )
        }}/>
        <Drawer.Screen name="Favoritos" component={FavoriteScreen} options ={{
          drawerIcon:() => (
            <FavoritesLogo width ={50} height = {50}/>
          )
        }}/>
        <Drawer.Screen name="Opiniões" component={OpinionScreen} options = {{
          drawerIcon:() => (
            <OpinionLogo width ={50} height = {50}/>
          )
        }}/>
        <Drawer.Screen name="Uploads" component={UploadScreen} options ={{
          drawerIcon:() => (
            <UploadLogo width ={50} height = {50}/>
          )
        }}/>
        {/* <Drawer.Screen name="Teste" component={TestScreen} options ={{
          drawerIcon:() => (
            <FavoritesLogo width ={50} height = {50}/>
          )
        }}/> */}
    </Drawer.Navigator>
  </NavigationContainer>
  )
}

export default Navigator
