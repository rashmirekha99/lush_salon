import {
  FlatList,
  SafeAreaView,
  StyleSheet,

  View,
 
} from 'react-native';
import React from 'react';

import HeadingText from '../../components/HeadingText';
import SubHeadingText from '../../components/SubHeadingText';
import ServiceDataContainer, {
  ServiceData
} from '../../components/ServiceDataContainer';
import colors from '../../constant/colors';

const serviceList: Array<ServiceData> = [
  {
    image: require('../../../assets/img/services/manicure.png'),
    title: 'Basic Manicure',
    price: '$30',
  },
  {
    image: require('../../../assets/img/services/pedicure.png'),
    title: 'Basic Pedicure',
    price: '$20',
  },
  {
    image: require('../../../assets/img/services/acrylic.png'),
    title: 'Acrylic Extensions',
    price: '$25',
  },
  {
    image: require('../../../assets/img/services/gel_manicure.png'),
    title: 'Gel Manicure',
    price: '$30',
  },
  {
    image: require('../../../assets/img/services/gel_pedocure.png'),
    title: 'Gel Pedicure',
    price: '$50',
  },
];

const IndividualSelection = () => {
  return (
    <SafeAreaView>
      <HeadingText />
      <View style={{paddingVertical:'10%'}}>
      <SubHeadingText title={'Now, choose one\nthat fit your needs:'} /></View>
      <FlatList
        data={serviceList}
        renderItem={({item}) => (
          <ServiceDataContainer
            image={item.image}
            title={item.title}
            price={item.price}
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={styles.horizontalLine}></View>
        )}
      />
    </SafeAreaView>
  );
};

export default IndividualSelection;

const styles = StyleSheet.create({
  horizontalLine: {
    height: 1,
    backgroundColor: colors.shade, // Line color
    marginHorizontal: 10,
  },
});
