import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Test from './src/components/test';
import Taist from './src/components/taist';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />
        <Taist/>
        <Test firstname="Lisa" lastname="Lucas"/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
