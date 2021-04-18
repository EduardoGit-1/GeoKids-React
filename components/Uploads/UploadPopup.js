
import BottomSheet from 'reanimated-bottom-sheet';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import GalleryIcon from '../Icons/GalleryIcon';
import TextIcon from '../Icons/TextIcon';
import CameraIcon from '../Icons/CameraIcon';
import MicrophoneIcon from '../Icons/MicrophoneIcon';



const UploadPopup = React.forwardRef(({fall, onGalleryPress, onCameraPress, onAudioPress}, ref) => {
    const renderInner = () => (
        <View style = {styles.content}>
            <View style = {{flexWrap: 'nowrap', padding:10,}}>
                <Text style = {styles.title}>O que queres enviar?</Text>
            </View>
            <View style = {[styles.buttonContainer]}>
                <TouchableOpacity style = {styles.touchable} onPress = {onGalleryPress}>
                    <View style = {styles.button}>
                        <GalleryIcon width = {30} height = {30}/>
                        <Text style = {[styles.text, {paddingLeft: 10}]}>Escolher da galeria</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.touchable} onPress = {onCameraPress}>
                    <View style = {styles.button}>
                        <CameraIcon width = {30} height = {30}/>
                        <Text style = {[styles.text, {paddingLeft: 10}]}>Usar a câmera</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.touchable} onPress = {onAudioPress}>
                    <View style = {styles.button}>
                        <MicrophoneIcon width = {30} height = {30}/>
                        <Text style = {[styles.text,{paddingLeft: 16}]}>Gravar áudio</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.touchable}>
                    <View style = {styles.button}>
                        <TextIcon width = {27} height = {27}/>
                        <Text style = {[styles.text, {marginLeft: 16}]}>Texto</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );

    const renderHeader = () => (
        <View style={styles.header}>
          <View style={styles.panelHeader}>
            <View style={styles.panelHandle} />
          </View>
        </View>
    );
    
    return(
            <BottomSheet
            ref={ref}
            snapPoints={[320, 0]}
            renderContent={renderInner}
            renderHeader={renderHeader}
            enabledContentGestureInteraction={false}
            initialSnap={1}
            callbackNode={fall}
            enabledGestureInteraction={true}
        />
    )

})


const styles = StyleSheet.create({
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
      },
    header: {
        backgroundColor: '#E6EEF9',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        elevation: 5,
        paddingTop: 5,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderTopWidth: 1,
        borderRightWidth:1,
        borderLeftWidth:1
      },
      content:{
        backgroundColor: '#E6EEF9', 
        alignItems:'center',
        padding: 5, 
        borderLeftWidth:1, 
        borderRightWidth: 1,
        height:'100%',
      },
      title:{
        fontFamily: 'Lexa-Mega',
        fontSize: 20,
    
      },
      text:{
        fontFamily: 'Lexa-Mega',
        fontSize: 15,
        color: '#FFFFFF',
        padding: 3,
      },
      buttonContainer:{
        flexDirection:'column',
      },
      touchable:{
        padding : 7
      },
      button:{
        flexDirection: 'row',
        backgroundColor: '#F44336',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : 10,
        borderWidth:1,
        padding:7,
    },
    icon:{
        marginRight: 10,
    }
})

export default UploadPopup