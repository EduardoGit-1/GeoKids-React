import React from "react";
import { View, Text , StyleSheet} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const PlaceRow = ({ data }) => {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        {data.description === 'Home'
          ? <Entypo name='home' siz={20} color={'black'} />
          : <Entypo name='location-pin' siz={20} color={'black'} />
        }
      </View>
      <Text style={styles.locationText}>{data.description || data.vicinity}</Text>
    </View>
  );
};


const styles = StyleSheet.create({  
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    iconContainer: {
      backgroundColor: '#a2a2a2',
      padding: 5,
      borderRadius: 50,
      marginRight: 15,
    },
    locationText: {
        fontFamily : 'Lexa-Mega'
    }
  });

export default PlaceRow;