import React from 'react';
import {View } from 'react-native';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';

import reducers from './src/store/reducers/root-reducer';

const rootReducer = combineReducers({
    reducerRoot: reducers,
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <View style={styles.container}>

          </View>
      </Provider>
    );
  }
}


