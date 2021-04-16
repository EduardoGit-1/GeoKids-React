import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, PermissionsAndroid, Platform} from 'react-native';
import BackGround from '../components/Common/BackGround'
import Header from '../components/Common/Header'
import MenuButton from '../components/Common/MenuButton'
import * as ImagePicker from "react-native-image-picker"
import { useEffect } from 'react';

const UploadScreen = ({navigation}) =>{
    const [filePath, setFilePath] = useState({});
    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                title: 'Camera Permission',
                message: 'App needs camera permission',
                },
            );
            // If CAMERA Permission is granted
            return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
            console.warn(err);
            return false;
            }
        } else return true;
        };
    const requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                title: 'External Storage Write Permission',
                message: 'App needs write permission',
                },
            );
            // If WRITE_EXTERNAL_STORAGE Permission is granted
            return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
            console.warn(err);
            alert('Write permission err', err);
            }
            return false;
        } else return true;
        };

    requestCameraPermission();
    requestExternalWritePermission();
      const chooseFile = (type) => {
        let options = {
          mediaType: type,
          maxWidth: 300,
          maxHeight: 550,
          quality: 1,
        };
        console.log(options)
        ImagePicker.launchImageLibrary(options, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            alert('User cancelled camera picker');
            return;
          } else if (response.errorCode == 'camera_unavailable') {
            alert('Camera not available on device');
            return;
          } else if (response.errorCode == 'permission') {
            alert('Permission not satisfied');
            return;
          } else if (response.errorCode == 'others') {
            alert(response.errorMessage);
            return;
          }
          console.log('base64 -> ', response.base64);
          console.log('uri -> ', response.uri);
          console.log('width -> ', response.width);
          console.log('height -> ', response.height);
          console.log('fileSize -> ', response.fileSize);
          console.log('type -> ', response.type);
          console.log('fileName -> ', response.fileName);
          setFilePath(response);
        });
      };
    return(
        <View style = {styles.container}>
            <StatusBar hidden />
            <BackGround/>
            <Header title ="UPLOADS"/>
            <TouchableOpacity onPress = {() => chooseFile('photo')}>
                <View style = {{borderWidth:2}} >
                    <Text>Upload imagem</Text>
                </View>
            </TouchableOpacity>
            <MenuButton width = '40' height = '40' navigation = {navigation}/>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor : "#E0D8D8",
        overflow: 'hidden'
    },

})

export default UploadScreen