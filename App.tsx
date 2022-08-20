import { StatusBar } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Task } from './src/screens/Task'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Task />
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
