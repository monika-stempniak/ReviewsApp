import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import About from '../screens/About';
import Header from '../shared/Header';

const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#36302A',
          height: 60,
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="About"
        component={About}
        options={({navigation}) => ({
          headerTitle: () => (
            <Header navigation={navigation} title="About Movies Reviews" />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
