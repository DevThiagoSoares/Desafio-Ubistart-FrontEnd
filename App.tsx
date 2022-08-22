import { StatusBar } from 'react-native';
import { StyleSheet, View } from 'react-native';
import Login from './src/components/Login';
import { Task } from './src/screens/Task'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/components/Register';


export default function App() {
  const Stack = createNativeStackNavigator()
  return (

    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Task" component={Task} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>


    // <View style={styles.container}>
    //  
    //   <Login />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
