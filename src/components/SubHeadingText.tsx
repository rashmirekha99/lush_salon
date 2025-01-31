import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import texts from '../constant/text'

type SubHeadinProp={
    title:string
}

const SubHeadingText = (props:SubHeadinProp) => {
  return (
     <Text style={styles.title}>{props.title}</Text>
  )
}

export default SubHeadingText

const styles = StyleSheet.create({title: {
  
    fontFamily:'Raleway-Medium',
    fontWeight: '400', fontSize: 24, alignSelf: 'center'},},)