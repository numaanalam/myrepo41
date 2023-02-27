import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
    <ScrollView horizontal={true} style={styles.container}>
      <View style={[styles.card,styles.cardElevated]}>
        <Text>Tap</Text>
      </View>
      <View style={[styles.card,styles.cardElevated]}>
        <Text>me</Text>
      </View>
      <View style={[styles.card,styles.cardElevated]}>
        <Text>to</Text>
      </View>
      <View style={[styles.card,styles.cardElevated]}>
        <Text>Scroll</Text>
      </View>
      <View style={[styles.card,styles.cardElevated]}>
        <Text>more....</Text>
      </View>
      <View style={[styles.card,styles.cardElevated]}>
        <Text>....!</Text>
      </View>
    </ScrollView>
    
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal: 8
},
container:{
  
  padding:8
},
card:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  width:100,
  height:100,
  borderRadius:5,
  margin:8,
  
},
cardElevated:{
  backgroundColor:'#f7a943',
  elevation: 6,
  shadowOffset:{
    width:1,
    height:1
  },
  shadowColor: '#e8f743',
  shadowOpacity: 0.4,
  shadowRadius: 2
},


})