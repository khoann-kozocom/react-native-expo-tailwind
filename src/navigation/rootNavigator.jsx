import OnBoarding from '@/screens/onBoarding';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NavigationContainer } from './navigationContainer';

const Stack = createNativeStackNavigator();

export const Root = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animation: 'none',
      }}
    >
      <Stack.Group>
        <Stack.Screen name="onBoarding" component={OnBoarding} />
        {/* <Stack.Screen name="App" component={TabNavigator} /> */}
      </Stack.Group>
    </Stack.Navigator>
  );
};

const RootNavigator = () => (
  <NavigationContainer>
    <Root />
  </NavigationContainer>
);

export default RootNavigator;
