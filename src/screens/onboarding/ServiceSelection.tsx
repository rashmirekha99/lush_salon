import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import texts from '../../constant/text';
import HeadingText from '../../components/HeadingText';
import ImageCard from '../../components/ImageCard';
import AppButton from '../../components/AppButton';

const ServiceSelection = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeadingText />
      <Text style={styles.title}>{texts.selectService}</Text>
      <View style={styles.serviceImageContainer}>
        <View style={styles.imageSubSection}>
          <ImageCard
            source={require('../../../assets/img/nails.png')}
            text={'Nail'}
          />
          <ImageCard
            source={require('../../../assets/img/eyebrow.png')}
            text={'Eyebrows'}
          />
          <ImageCard
            source={require('../../../assets/img/massage.png')}
            text={'Massage'}
          />
          <ImageCard
            source={require('../../../assets/img/hair.png')}
            text={'Hair'}
          />
        </View>

        <AppButton title={'Skip'} active={true} />
      </View>
    </SafeAreaView>
  );
};

export default ServiceSelection;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  title: {fontWeight: '400', fontSize: 24, alignSelf: 'center'},
  serviceImageContainer: {
    height: '50%',
    paddingHorizontal: '10%',
  },
  imageSubSection: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '10%',
  },
});
