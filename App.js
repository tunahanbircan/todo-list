import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { CardContainer } from './src/components';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          Todo List
        </Text>
        <CardContainer />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    marginTop: 16
  }
});

export default App;


