import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomePage.js';
import AddEditScreen from './src/screens/AddEditScreen'; 
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4CAF50',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Lista de Pessoas' }}
        />

        {/* Info Screen */}
        <Stack.Screen
          name="Info"
          component={AddEditScreen}
          options={{ title: 'Gerenciar Pessoa' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}