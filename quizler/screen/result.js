import {Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../components/title'

const Result = ({navigation,route}) => {
    const {score} = route.params
    // console.log(params)

    const resultBanner= score>10?"https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png":"https://cdni.iconscout.com/illustration/free/thumb/concept-about-business-failure-1862195-1580189.png"

  return (
    // <View style={styles.container}>
      
    // <View>
    //     <Text>This is Result</Text>
    // </View>
    // <View>
    // <Image source={{uri:'https://www.malwarebytes.com/blog/images/uploads/2018/12/shutterstock_1214717467.jpg'}}
    //     style={styles.banner}
    //     resizeMode='contain'
    //     />
    // </View>
    //     <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.button}>
    //             <Text style={styles.buttonText}>Home</Text>   
    //     </TouchableOpacity>

    // </View>
    
    <View style={styles.container}>
    <Title titleText='RESULT'/>
    <Text style={styles.scoreValue}>{score}</Text>

    <View style={styles.bannerContainer}>
      <Image source={{uri:resultBanner}}
      style={styles.banner}
      resizeMode='contain'
      />
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.button}>
      <Text style={styles.buttonText}>Go To Home</Text>
    </TouchableOpacity>
  </View>
    
  )
}

export default Result

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
    },
    scoreValue:{
        fontSize:24,
        fontWeight:900,
        alignSelf:'center',
        color:'#4f7892'
    }
})