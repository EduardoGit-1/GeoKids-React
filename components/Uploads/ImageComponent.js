import React from 'react'
import { View, StyleSheet,Image} from 'react-native'


const ImageComponent = ({image}) =>{

    return (
            <View style = {styles.container}>
                <Image style = {styles.image} source = {{uri:image}}/>
            </View>

    )
}

export default ImageComponent
const styles = StyleSheet.create({
    image:{
        flex:1, 
        width: undefined, 
        height: undefined,
        resizeMode:'contain',
      },
    container:{
        borderRadius:10,
        borderWidth: 2,
        width: 330, 
        height:250,

      }

    
})