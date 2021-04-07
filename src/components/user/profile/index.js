import React from "react";
import { View, Text, ScrollView } from "react-native";
import {
  Appbar , TextInput, Divider, Button, Title
} from 'react-native-paper'

import UserData from "./userData";

const Profile = ({ navigation }) => {
  return (
    <ScrollView>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content title="Profile" subtitle="RedWire" />
      </Appbar.Header>
      <View style={{padding: 20}}>
        <Title>Your user Login data</Title>
        <TextInput
          label="email"
          value={''}
          onChangeText={text => console.log('text')}
          mode="outlined"
        />
        <TextInput
          label="password"
          value={''}
          onChangeText={text => console.log('text')}
          mode="outlined"
        />
        <Button
          mode="contained"
          style={{marginTop: 10}}
          onPress={() => alert('text')}
        >Update</Button>
      </View>
      <Divider/>
      <UserData/>
    </ScrollView>
  );
};

export default Profile;
