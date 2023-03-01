import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contacts = [
        {
            uid:1,
            name:'Numaan',
            status:'Just love for tech',
            imageUrl:'https://media.licdn.com/dms/image/D4D03AQEE7z2pHymRlQ/profile-displayphoto-shrink_100_100/0/1677422795457?e=1683158400&v=beta&t=PcDQ0v9kO9WXas_FrgVOLmAI3jIVwMcUUQXE6iWis1I',
        },
        {
            uid:2,
            name:'Numaan',
            status:'Just love for tech',
            imageUrl:'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
            uid:3,
            name:'Numaan',
            status:'Just love for tech',
            imageUrl:'https://avatars.githubusercontent.com/u/40804220?s=96&v=4',
        },
        {
            uid:4,
            name:'Numaan',
            status:'Just love for tech',
            imageUrl:'https://avatars.githubusercontent.com/u/40804220?s=96&v=4',
        },

    ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
        <ScrollView style={styles.container} scrollEnabled={false}>
        
        {
        contacts.map(({uid,name,status,imageUrl}) =>(
            <View key={uid} style={styles.userCard}>
                <Image source={{ uri: imageUrl }} style={styles.userImage} />
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                 </View>
            </View>
        ))}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

    headingText:{
       fontSize: 24,
       fontWeight:'bold',
       paddingHorizontal: 8 
    },
    container:{
        paddingHorizontal:16,
        marginBottom:4
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'#207398',
        borderRadius:8,
        padding:4

    },
    userImage:{
        width:60,
        height:70,
        borderRadius: 60/ 2,
        marginRight:14,
        marginBottom:8   
    },
    userName:{
        fontSize:16,
        fontWeight:'bold',
        color:'#FFF'
    },
    userStatus:{
        fontSize:12,
        color:'#F7CD2E'
        
    }


})