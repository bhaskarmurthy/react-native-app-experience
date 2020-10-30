import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Vitals from 'react-native-vitals';

export default function App() {
  return (
    <React.Profiler id="App" onRender={() => Vitals.reportFullyDrawn()}>
      <View style={styles.container}>
        <Text>Drawn</Text>
      </View>
    </React.Profiler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
