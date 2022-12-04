import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from './screens/Profile';
import Edit from './screens/Edit';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='Edit' component={Edit}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}