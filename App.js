/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Demo from './views/demo/Demo';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Demo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;