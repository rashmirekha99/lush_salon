import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import texts from '../../constant/text';
import HeadingText from '../../components/HeadingText';
import ImageCard from '../../components/ImageCard';
import AppButton from '../../components/AppButton';
import SubHeadingText from '../../components/SubHeadingText';

interface ImageData{
    src:string,
    name:string,
}

const images:Array<ImageData>=[
    {
        src:require('../../../assets/img/nails.png'),
        name:'Nail'
    },{
        src: require('../../../assets/img/eyebrow.png'),
        name: 'Eyebrows'
    },
    {
        src: require('../../../assets/img/massage.png'),
        name: 'Massage'
    },{
        src: require('../../../assets/img/hair.png'),
        name: 'Hair'
    },
]

const ServiceSelection = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeadingText />
      <SubHeadingText title={texts.selectService}/>
      <View style={styles.serviceImageContainer}>
        <View style={styles.imageSubSection}>
          {images.map((image)=><ImageCard source={image.src} text={image.name}/>)}
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
