import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header';

const Stack = createStackNavigator();

const HomeStack = () => {
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
        name="Home"
        component={Home}
        options={({navigation}) => ({
          headerTitle: () => (
            <Header navigation={navigation} title="Movies Reviews" />
          ),
        })}
      />
      <Stack.Screen
        name="Review Details"
        component={ReviewDetails}
        options={{
          title: 'Review Details',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
