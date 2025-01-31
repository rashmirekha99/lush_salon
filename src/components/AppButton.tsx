import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../constant/colors';

type ButtonProps = {
  title: string;
  active: boolean;
  onpress?:()=>void;
};

const AppButton = (props: ButtonProps) => {
  return (
   
    <TouchableOpacity
    activeOpacity={0.8}
      style={[
        styles.buttonStyle,
        {backgroundColor: props.active ? colors.primary : colors.white},
      ]}>
      <Text
        style={[
          styles.textStyle,
          {color: props.active ? colors.white : colors.primary},
        ]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 10,
    paddingVertical: 10,
    
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {color: colors.white, fontWeight: '600'},
});
