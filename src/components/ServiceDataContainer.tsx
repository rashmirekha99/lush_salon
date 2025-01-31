import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import colors from '../constant/colors';

export type ServiceData={
    image:any,
    title:string,
    price:string,
}

const ServiceDataContainer = (props:ServiceData) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={props.image}
      />
      <View style={styles.description}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subTitle}>{props.price}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon name="arrow-right" size={20} style={styles.icon} />
      </View>
    </View>
  );
};

export default ServiceDataContainer;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', marginHorizontal: 15, marginVertical: 5,height:100},
  title: {
    fontSize: 20,
  },
  subTitle: {
    fontSize: 20,
    color: colors.tertiary,
    fontWeight: '600',
    paddingTop: '5%',
  },
  image: {flex: 2, borderRadius: 10,resizeMode:'contain',alignSelf:'center'},
  description: {flex: 3, paddingLeft: '2%', paddingTop: '5%'},
  iconContainer: {justifyContent: 'center', flex: 1},
  icon: {alignSelf: 'center'},
});
