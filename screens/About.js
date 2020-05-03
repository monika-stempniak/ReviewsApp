import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {globalStyles} from '../styles/global';

const About = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About Screen</Text>
      <Text style={globalStyles.paragraph}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
        necessitatibus, amet earum consequatur magni nihil nobis eius doloribus
        libero delectus dolores atque animi, dicta deleniti aperiam. Odio ipsam
        quisquam sint?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default About;
