import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'

const Onboarding = () => {
  return (
      <SafeAreaView>
        <Text style={styles.title}>
  MeTime
        </Text>
      </SafeAreaView>
    );
}

export default Onboarding

const styles = StyleSheet.create({
  title: {
    fontWeight:'600',fontSize:25,alignSelf:'center',marginTop:'3%'
  },
  
});