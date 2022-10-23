import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from "react-native-vector-icons/FontAwesome";
import { Provider } from 'react-redux';
import Tabs from './navigation/bottomTagView';
import { NavigationContainer } from '@react-navigation/native';

import { PersistGate } from 'redux-persist/integration/react';
import  store  from './redux/stores/store';
import persistor from './redux/stores/store'
import TagView from './views/TagView';

export default function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}> */}
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
      {/* </PersistGate> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
