import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Chanel from './screens/Chanel'

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
      >
        <AppStack.Screen
          name="Home"
          component={Chanel}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
