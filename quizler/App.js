import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './screen/home'
import Quiz from './screen/quiz'
import Result from './screen/result'
import { NavigationContainer } from '@react-navigation/native'
import MyStack from './navigation'


const App = () => {
  return (
    

<NavigationContainer>
<MyStack/>
</NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    paddingTop:40,
    paddingHorizontal:16
  }
}) 