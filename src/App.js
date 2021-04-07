import 'react-native-gesture-handler';
import {Colors} from "./utils/tools";
import React from 'react';
import {connect} from 'react-redux';

import SideDrawer from "./routes/customDrawer";

import {NavigationContainer} from '@react-navigation/native';

import { Stack, Drawer, HomeStack, VideoStack, screenOptions } from './routes/stacks';
import AuthScreen from "./components/auth";
import Profile from "./components/user/profile";
import Video from "./components/main/videos/video";

const MainDrawer = () => (
  <Drawer.Navigator
    drawerContent={(props) => <SideDrawer {...props}/>}
    drawerStyle={{backgroundColor: Colors.black}}
  >
    <Drawer.Screen name="Home" component={HomeStack} />
    <Drawer.Screen name="Videos" component={VideoStack} />
    <Drawer.Screen name="Profile" component={Profile} />
  </Drawer.Navigator>
)

const App = ({auth}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          auth.isAuth ?
            <>
              <Stack.Screen options={{headerShown: false}} name='Main' component={MainDrawer} />
              <Stack.Screen name="Video" component={Video} options={{ ...screenOptions }} />
            </>
            :
            <Stack.Screen name="AuthScreen" component={AuthScreen} options={{headerShown: false}} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
