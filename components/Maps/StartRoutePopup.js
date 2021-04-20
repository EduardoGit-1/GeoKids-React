import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import StartRouteIcon from '../Icons/StartRouteIcon';
import CancelIcon from '../Icons/CancelIcon';

const StartRoutePopUp = React.forwardRef(({fall, destination, onStartRouteClick, onCancelRouteClick}, ref) => {
  const [currentFont, setCurrentFont] = useState(12);  
  const renderInner = () => (
        <View style = {styles.content}>
            <View style = {{width: 295}}>
                <Text 
                numberOfLines={ 2 }
                style = {[styles.title, { fontSize: currentFont }]}
                adjustsFontSizeToFit
                onTextLayout={ (e) => {
                  const { lines } = e.nativeEvent;
                  if (lines.length > 2) {
                    setCurrentFont(currentFont - 1);
                  }
                } }
                >{destination != null ? destination.designation : "A carregar..."}</Text>
            </View>
            <View style = {[styles.buttonContainer]}>
                <TouchableOpacity onPress = {onStartRouteClick} style = {styles.touchable}>
                    <View style = {styles.button}>
                        <StartRouteIcon width = {15} height = {15}/>
                        <Text style = {[styles.text, {padding: 8}]}>Iniciar</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {onCancelRouteClick} style = {styles.touchable} >
                    <View style = {styles.button}>
                        <CancelIcon width = {17} height = {17}/>
                        <Text style = {styles.text}>Cancelar</Text>
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
            snapPoints={[130, 0]}
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
        padding: 5, 
        borderLeftWidth:1, 
        borderRightWidth: 1,
        height:'100%',
      },
      title:{
        fontFamily: 'Lexa-Mega',
    
      },
      text:{
        fontFamily: 'Lexa-Mega',
        fontSize: 10,
        color: '#FFFFFF',
        padding: 3,
      },
      buttonContainer:{
        position: 'absolute',
        bottom: 1,
        right: 3,
      },
      touchable:{
        padding : 3
      },
      button:{
        flexDirection: 'row',
        backgroundColor: '#F44336',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : 15,
        borderWidth:1,
        width: 91,
        height: 23
    }
})

export default StartRoutePopUp