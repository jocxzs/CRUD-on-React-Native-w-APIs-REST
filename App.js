import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage'; // Assuming HomePage.js exists
import InfoPages from './InfoPages'; // Assuming InfoPages.js exists

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
          component={HomePage}
          options={{ title: 'Lista de Pessoas' }}
        />

        {/* Info Screen */}
        <Stack.Screen
          name="Info"
          component={InfoPages}
          options={{ title: 'Gerenciar Pessoa' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}