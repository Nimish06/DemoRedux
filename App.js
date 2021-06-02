/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import store from './store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {incNumber, decNumber} from './actions/index';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
const App = () => {
  const myState = useSelector(state => state.changeNumber);
  const dispatch = useDispatch();
  // store.subscribe(() => console.log(store.getState()));
  const increase = () => dispatch(incNumber());
  const decrease = () => dispatch(decNumber());
  return (
    // <AppWrapper>
    <View style={styles.screen}>
      <View style={styles.buttons}>
        <Button title="Increment" onPress={increase} />
      </View>
      <View>
        <Text style={styles.textBox}>{myState}</Text>
      </View>
      <View style={styles.buttons}>
        <Button title="Decrement" onPress={decrease} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  buttons: {
    // paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 30,
  },
  textBox: {
    fontSize: 20,
    borderColor: 'red',
    borderRadius: 5,
    borderWidth: 2,
    borderStyle: 'solid',
    paddingLeft: 8,
    marginHorizontal: 10,
    paddingHorizontal: 5,
  },
});

export default AppWrapper;
