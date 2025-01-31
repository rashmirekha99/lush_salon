import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../constant/colors';

type ButtonProps = {
  title: String;
  active: Boolean;
};

const AppButton = (props: ButtonProps) => {
  return (
    <View
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
    </View>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 10,
    paddingVertical: 10,
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {color: colors.white, fontWeight: '600'},
});
