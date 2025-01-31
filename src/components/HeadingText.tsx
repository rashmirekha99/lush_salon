import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeadingText = () => {
  return (
     <Text style={styles.title}>MeTime</Text>
  )
}

export default HeadingText

const styles = StyleSheet.create({title: {
    fontWeight: '600',
    fontSize: 25,
    alignSelf: 'center',
    marginTop: '3%',
    color: 'black',
  },})