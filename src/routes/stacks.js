import React from 'react';
import { View } from "react-native";

import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'

import {Colors, LogoText} from "../utils/tools";
import VideosScreen from "../components/main/videos";
import HomeScreen from "../components/main/articles";
import Article from "../components/main/articles/article";

export const Stack = createStackNavigator();
export const Drawer = createDrawerNavigator();

export const screenOptions = {
  headerTitleAlign: 'center',
  headerTintColor: Colors.red,
  headerStyle: {
    backgroundColor: Colors.black,
    borderBottomWidth: 6,
    borderBottomColor: Colors.red
  },
  headerTitle: () => <LogoText style={{fontSize: 25, color: Colors.red}}/>
}

const LeftIcon = () => {
  const navigation = useNavigation();
  return (
    <View style={{margin: 10}}>
      <Icon
        name="menufold"
        type="antdesign"
        color={Colors.white}
        onPress={() => navigation.openDrawer()}
      />
    </View>
  )
}

export const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home" screenOptions={{
   ...screenOptions
  }}>
    <Stack.Screen name="Home" component={HomeScreen} options={{
      headerLeft: (props) => <LeftIcon />
    }} />
    <Stack.Screen name="Article" component={Article} />
  </Stack.Navigator>
)

export const VideoStack = () => (
  <Stack.Navigator initialRouteName="Videos" screenOptions={{
    ...screenOptions
  }}>
    <Stack.Screen name="Videos" component={VideosScreen} options={{
      headerLeft: (props) => <LeftIcon />
    }} />
  </Stack.Navigator>
)

