import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../components/title'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title titleText='QUIZLER'/>

      <View style={styles.bannerContainer}>
        <Image source={{uri:'https://www.malwarebytes.com/blog/images/uploads/2018/12/shutterstock_1214717467.jpg'}}
        style={styles.banner}
        resizeMode='contain'
        />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Quiz')} style={styles.button}> 
        <Text style={styles.buttonText}>START</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    banner:{
        height:300,
        width:330,
        borderRadius:6
    },
    bannerContainer:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    container:{
        paddingTop:40,
        paddingHorizontal:20,
        height:'100%'
    },
    button:{
       width:'100%' ,
       backgroundColor:'#477d85',
       padding:20,
       borderRadius:16,
       marginTop:20,
       alignItems:'center',
       marginBottom:40
       
    },
    buttonText:{
        fontSize:24,
        fontWeight:'900',
        color:'white',
       
        
    }
})