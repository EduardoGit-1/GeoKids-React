
import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Image, View, Alert} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow'

const API_KEY = 'AIzaSyCM7K4DnUmRJVGMwVWs9yxSQgGydHAtWVg'
const CONTAINER_HEIGHT = 480
const SCREEN_WIDTH = 300
const ASPECT_RATIO = CONTAINER_HEIGHT / SCREEN_WIDTH
const DestinationSearch = ({setRegion}) =>{
    return(
        <View styles = {styles.container}>
            <GooglePlacesAutocomplete
                placeholder="Para onde queres ir?"
                onPress={(data, details = null) => {
                    let latitude = details.geometry.location.lat
                    let longitude = details.geometry.location.lng
                    let latitudeDelta = details.geometry.viewport.northeast.lat - details.geometry.viewport.southwest.lat;
                    let longitudeDelta = latitudeDelta * ASPECT_RATIO
                    setRegion({
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta : latitudeDelta,
                        longitudeDelta: longitudeDelta
                    });
                }}
                enablePoweredByContainer={false}
                suppressDefaultStyles
                styles={{
                textInput: styles.textInput,
                    
                separator: styles.separator,
                }}
                fetchDetails
                query={{
                key: API_KEY,
                language: 'pt',
                components: 'country:pt'
                }}
                renderRow={(data) => <PlaceRow data={data} />}
            />
        </View>

      
    )
}

export default DestinationSearch
const styles = StyleSheet.create({
    container: {
      padding: 10,
      height: '100%',
    },
    textInput: {
        marginTop:15,
        width:300,
        borderRadius: 15,
        padding: 10,
        backgroundColor: '#eee',
        marginVertical: 5,
        fontFamily: 'Lexa-Mega'
    },
    separator: {
        backgroundColor: '#efefef',
        height: 1,
    },
    autocompleteContainer: {

    }
  });