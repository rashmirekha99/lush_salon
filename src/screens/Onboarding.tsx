import {StyleSheet, Text, SafeAreaView, Image, View} from 'react-native';
import React from 'react';
import colors from '../constant/colors';
import AppButton from '../components/AppButton';
import texts from '../constant/text';

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>MeTime</Text>

      <Image
        style={styles.backgroundImage}
        source={require('../../assets/img/background.png')}
      />
      <Image
        style={styles.middleImage}
        source={require('../../assets/img/woman.png')}
      />

      <View style={styles.bottomSection}>
        <Text style={styles.largeTitle}>{texts.onBoardMainText}</Text>
        <Text style={styles.subTitle}>{texts.onBoardingSubTtext}</Text>
        <View style={styles.buttonContainer}>
          <AppButton title={'Skip'} active={false} />
          <View style={styles.buttonSpacing} />
          <AppButton  title={'Start'} active={true}/>
        </View>
      </View>
      
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    
  },
  title: {
    fontWeight: '600',
    fontSize: 25,
    alignSelf: 'center',
    marginTop: '3%',
    color: 'black',
  },
  largeTitle: {
   
    fontSize: 32,
    paddingBottom: '3%',
    textAlign: 'center',
   fontFamily:'Raleway-Bold',
    
  },
  subTitle: {
    color: colors.tertiary,
    textAlign: 'center',
    fontFamily:'Raleway-Medium',
  },
  middleImage: {position: 'absolute', marginTop: '-30%'},
  buttonSpacing: {width: '5%'},
  backgroundImage: {width: '100%'},
  bottomSection: {paddingHorizontal: '10%', justifyContent: 'space-around'},
  buttonContainer: {flexDirection: 'row', marginTop: '10%'},
});
