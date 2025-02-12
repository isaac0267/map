import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { useState } from 'react';

export default function App() {
  const[markers,setMarkers]=useState([])
  const [reigion,setRegion]=useState({
    latitude:55,
    longitude:12,
    latiudeDelta:20,
    longitudeDelta:20
  
  })

  function addMarker(data){
    const {latitude,longitude}=data.nativeEvent.coordinate
    const newMarker={
      coordinate:{latitude,longitude},
      key:data.timeStamp,
      title:"Great place"
    }
    setMarkers([...markers,newMarker])
 
     
  }
  return (
    <View style={styles.container}>
      <MapView
      style={styles.map}
       region={reigion}
       onLongPress={addMarker}
      >
       {markers.map(marker =>(
       <Marker
         coordinate={marker.coordinate}
         key={marker.key}
         title={marker.title}
       />
       ))}
       
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map:{
   width:'100',
   height:'100%',

  },
});
