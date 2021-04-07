import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DrawerContentScrollView } from '@react-navigation/drawer';
import {Button} from "react-native-elements";
import {Colors, LogoText} from "../utils/tools";

const SideDrawer = (props) => {
  const {state} = props;
  const {drawerButton} = styles

  const routes = state.routeNames.map(route => {
    return  <Button
      key={route}
      title={route}
      onPress={() => props.navigation.navigate(route)}
      buttonStyle={drawerButton}
      titleStyle={{width: '100%'}}
    />
  });

  const logout = () => {
    console.log("logout");
  }

  return (
    <DrawerContentScrollView {...props}>
      <View>
        <LogoText style={{fontSize:40, textAlign: 'center', color: Colors.black2}} />
      </View>
      {routes}
      <Button
        title="Logout"
        onPress={() => logout()}
        titleStyle={{width: '100%'}}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerButton: {
    backgroundColor: Colors.black,
    borderBottomWidth: 1,
    borderBottomColor: Colors.black2,
  }
})

export default SideDrawer;
