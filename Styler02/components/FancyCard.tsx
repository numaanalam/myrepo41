import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
        <View  style={[styles.card, styles.cardElevated]}>
        <Image
        source={{
            uri:'https://static.toiimg.com/thumb/91955051.cms?resizemode=75&width=1200&height=900'
        }}
        style={styles.cardImage}
        />
            <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Taj Mahal</Text>
            <Text style={styles.cardLabel}>Agra</Text>
            <Text style={styles.cardDescription}>One of the Seven Wonders of the World, the Taj Mahal in Agra is among the most visited monuments on the planet. This white marble architecture is a symbol of undying love and affection of a husband for his dead wife. The monument was commissioned by the Mughal emperor Shah Jahan for his beloved wife, Mumtaz Mahal.</Text>
            <Text style={styles.cardFooter}>made with ❤ by mrroBot</Text>

        </View>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({

    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card: {
        width:330,
        height:520,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16

    },
    cardElevated:{
        backgroundColor:'#FFFFFF',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage:{
        height:200,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6

    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle:{
        color:'#000000',
        fontSize:24,
        fontWeight:'bold',
        marginBottom: 6
    },
    cardLabel:{
        color:'#000000',
        fontSize:20,
        marginBottom:4
    },
    cardDescription:{
        color:'#242B2E',
        fontSize:16,
        marginTop:6,
        marginBottom:12
    },
    cardFooter:{
        flex:1,
        textAlign:'center',
      
        color:'#000000',
        marginBottom:4,
        
    }

})
