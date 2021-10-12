import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  Dimensions,
  StyleSheet, 
  Text, 
  TouchableHighlight, 
  View, 
  Image, 
  SafeAreaView, 
  Button 
} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';

export default function App() {
  console.log(useDimensions());
  return (
    //<SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
        }}>
        <View style={{
          backgroundColor: "dodgerblue",
          flex: 2,}}
          />
      
        <View style={{
          backgroundColor: "gold",
          flex: 1,}}
          />
      
        <View style={{
          backgroundColor: "tomato",
          flex: 1,}}
          />
      </View>
    //</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
