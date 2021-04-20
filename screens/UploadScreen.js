import React, {useReducer , useRef, useContext, useEffect, useState} from 'react';
import {View,StyleSheet, StatusBar, TouchableOpacity,SectionList} from 'react-native';
import BackGround from '../components/Common/BackGround'
import Header from '../components/Common/Header'
import MenuButton from '../components/Common/MenuButton'
import * as ImagePicker from 'expo-image-picker';
import { Audio } from 'expo-av';
import ImageComponent from '../components/Uploads/ImageComponent';
import VideoComponent from '../components/Uploads/VideoComponent';
import {GlobalContext} from '../context/Provider'
import AddUploadIcon from '../components/Icons/AddUploadIcon'
import Animated from 'react-native-reanimated';
import UploadPopup from '../components/Uploads/UploadPopup';
import UploadHeader from '../components/Uploads/UploadHeader'
import uploadReducer from '../context/reducers/uploadsReducer'
import sendImage from '../context/actions/uploads/addImage'
import sendVideo from '../context/actions/uploads/addVideo'
import sendAudio from '../context/actions/uploads/addAudio'
import sendText from '../context/actions/uploads/addText'
import {getUploads} from '../context/storage/AsyncStorage' 
import RecordAudioComponent from '../components/Uploads/RecordAudioComponent';
import AudioComponent from '../components/Uploads/AudioComponent';
import AddTextComponent from '../components/Uploads/AddTextComponent';
import TextComponent from '../components/Uploads/TextComponent';

const UploadScreen = ({navigation, route}) =>{
  const {authState:{user}} = useContext(GlobalContext)
  const [uploadState, uploadDispatch] = useReducer(uploadReducer, {images: [], videos : [], audios: [], texts:[]})
  const {destination} = route.params;
  const [recording, setRecording] = useState(null)
  const [isRecordingVisible, setRecordingVisible] = useState(false)
  const [isTextInputVisible, setTextInputVisible] = useState(false)
  const bs = useRef(null);
  const fall = new Animated.Value(1);
  useEffect(()=>{
    getUploads(destination.placeID).then((upload) =>{

      uploadDispatch({
        type : 'GET_UPLOADS_SUCCESS',
        payload: upload
      })
    })
  }, [destination])

  let DATA = [
    {
      title: 'Imagens',
      data : uploadState.images
    },
    {
      title: 'Videos',
      data: uploadState.videos
    },
    {
      title: 'Audio',
      data: uploadState.audios
    },
    {
      title: 'Texto',
      data: uploadState.texts
    }
  ]
    const renderItem = ({item}) =>{
        if(item.type === "image"){
          return (<ImageComponent image = {item.data}/>)
        }else if (item.type === "video"){
          return (<VideoComponent video = {item.data}/>)
        }else if (item.type === "audio"){
          return (<AudioComponent audio = {item.data}/>)
        }else{
          return (<TextComponent text = {item.data}/>)
        }
      }

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });
      console.log(result);

        if(result.type === 'video'){
          console.log("video")
          sendVideo(destination, user.id, result.uri)(uploadDispatch)
        }else{
          console.log("imagem")
          sendImage(destination, user.id, result.uri)(uploadDispatch)
        }
      }

    const useCamera = async () => {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });
      console.log(result);
      if (!result.cancelled) {
        if(result.type === "video"){
          console.log(result.uri)
        }else{
          sendImage(destination, user.id, result.uri)(uploadDispatch)
        }
      }
    }

    async function startRecording() {
      try {
        console.log('Requesting permissions..');
        await Audio.requestPermissionsAsync();
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        }); 
        console.log('Starting recording..');
        const recording = new Audio.Recording();
        await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
        await recording.startAsync(); 
        setRecording(recording);
        console.log('Recording started');
      } catch (err) {
        console.error('Failed to start recording', err);
      }
    }
    const onAudioPress = () =>{
      setRecordingVisible(true);
      bs.current.snapTo(1)
    }
    const onAddTextPress = () =>{
      setTextInputVisible(true);
      bs.current.snapTo(1)
    }

    const onTextSendClick = (text) => {
      sendText(destination, user.id, text)(uploadDispatch)
      setTextInputVisible(false)
}
    async function stopRecording() {
      console.log('Stopping recording..');
      setRecording(undefined);
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecordingVisible(false); 
      if(uri != null){
        sendAudio(destination, user.id, uri)(uploadDispatch)
      }
      console.log('Recording stopped and stored at', uri);
    }

    return(
        <View style = {styles.container}>
            <StatusBar hidden />
            <BackGround/>
            <Header title ="UPLOADS"/>
            <UploadPopup 
              ref = {bs} 
              fall = {fall}
              onGalleryPress = {pickImage}
              onCameraPress = {useCamera}
              onAudioPress = {onAudioPress}
              onAddTextPress = {onAddTextPress}
            />
             <RecordAudioComponent 
              recording = {recording} 
              isModalVisibile = {isRecordingVisible} 
              setModalVisible= {setRecordingVisible}
              startRecording = {startRecording}
              stopRecording = {stopRecording}/>
              <AddTextComponent 
                isModalVisibile = {isTextInputVisible} 
                setModalVisible= {setTextInputVisible}
                onTextSendClick = {onTextSendClick}
                /> 
            <View style = {{height : 590}}>

              <SectionList
              sections={DATA}
              keyExtractor={(item, index) => item + index}
              renderItem={renderItem}
              ItemSeparatorComponent = {() => {return (<View style ={{padding:15}}></View>)}}
              renderSectionHeader={({ section: { title } }) => {
                let info = DATA.find(data => data.title === title)
                let arrayLength = info.data.length;
                  return <UploadHeader title = {title} arrayLength = {arrayLength}/>

              }
              }
            />
            </View>
            <MenuButton width = '35' height = '35' navigation = {navigation}/>
            <TouchableOpacity style = {{position:'absolute', bottom: 10, right: 10}} onPress={()=>{bs.current.snapTo(0)}}>
              <View >
                <AddUploadIcon width = {47} height = {47} />
              </View>
            </TouchableOpacity>
            
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
    videoContainer:{
      borderWidth: 2,
      borderRadius:10,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      overflow:'hidden'
    },
    video: {
      alignSelf: 'center',
      width: 350,
      height: 220,
    },
    image:{
      flex:1, 
      width: undefined, 
      height: undefined,
      resizeMode:'contain'
    },
    imageContainer:{
      borderRadius:10,
      borderWidth: 2,
      width: 330, 
      height:250
    }

})

export default UploadScreen