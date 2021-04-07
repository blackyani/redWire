import App from './src/App';
import {AppRegistry, View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider as PaperProvider } from 'react-native-paper';
import Toast from 'react-native-toast-message';

import reducers from './src/store/reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk)),
);

const toastConfig = {
  info: ({ text1, props, ...rest }) => (
    <View style={{ height: 60, width: '100%', backgroundColor: 'pink' }}>
      <Text>{text1}</Text>
      <Text>{props.guid}</Text>
    </View>
  ),
};

const reduxApp = () => (
  <Provider store={createStoreWithMiddleware}>
    <PaperProvider>
      <App />
      <Toast
        config={toastConfig}
        ref={(ref) => Toast.setRef(ref)}
      />
    </PaperProvider>
  </Provider>
);

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => reduxApp);
