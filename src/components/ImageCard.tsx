import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type ImageProps={
    source:any,
    text:string
}

const ImageCard = (props:ImageProps) => {
  return (
    <View style={styles.imageContainer}>
                    
                <Image style={styles.image} source={props.source}/>
                <Text style={styles.textStyle}>{props.text}</Text>
                
                </View>
  )
}

export default ImageCard

const styles = StyleSheet.create({imageContainer:{
    justifyContent:'center',
    alignItems:'center'
  },
image:{
    marginVertical:'10%',
    borderRadius:10
},textStyle:{
    fontSize:18,
    fontFamily:'Raleway-Medium'
}
})