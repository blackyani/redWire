import React from "react";
import { Text } from 'react-native';
import Toast from 'react-native-toast-message';

export const Colors = {
  'white': '#fff',
  'black': '#131418',
  'black2': '#272930',
  'black3': '#1a1a21',
  'gray': '#c8c8c8',
  'red': '#d74444',
}

export const LogoText = ({style}) => (
  <Text style={{
      fontFamily: 'Monoton-Regular',
      color: Colors.white,
      fontSize: 50,
      ...style
    }}
  >
    Red Wire
  </Text>
)

export const showToast = (type = 'info', text1 = 'Text 1', text2 = 'Text 2') => {
  return Toast.show({
      type,
      text1,
      text2,
      position: 'bottom',
      visibilityTime: 3000,
      topOffset: 30,
    })
}
