import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {globalStyles} from '../styles/global';
import Card from '../shared/Card';

const ReviewDetails = ({route}) => {
  const ratings = () => {
    const ratingsNum = route.params.rating;
    return new Array(ratingsNum).fill(ratingsNum);
  };

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{route.params.title}</Text>
        <Text style={globalStyles.paragraph}>{route.params.body}</Text>
        <View style={styles.rating}>
          <Text style={globalStyles.paragraph}>Movie rating: </Text>
          {ratings().map((_r, i) => (
            <Icon name="grade" size={20} color="#F8A000" key={i} />
          ))}
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});

export default ReviewDetails;
