import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {globalStyles} from '../styles/global';
import Card from '../shared/Card';
import ReviewForm from './ReviewForm';

const uniqueId = () => {
  return Math.floor(Math.random() * Date.now()).toString();
};

const Home = ({navigation}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: 'Dark Blue Almost Black',
      rating: 5,
      body:
        'A handful of young people try to sort out the complications of their relationships -- both romantic and familial -- in this comedy drama from Spain.',
      key: uniqueId(),
    },
    {
      title: 'Fried Green Tomatoes',
      rating: 4,
      body:
        'A woman learns the value of friendship as she hears the story of two women and how their friendship shaped their lives in this warm comedy-drama.',
      key: uniqueId(),
    },
    {
      title: 'Red Riding Hood',
      rating: 3,
      body:
        'Interpretation of a classic fairy tale. After years of calm, the werewolf from Daggerhorn begins to spread terror again. Valerie discovers that she has a bond with the marauding beast.',
      key: uniqueId(),
    },
  ]);

  const addReview = review => {
    review.key = uniqueId();
    setReviews(currentReviews => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <Icon
              name="close"
              size={24}
              style={{...styles.modalToggle, ...styles.modalClose}}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Icon
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Review Details', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e8e3df',
    color: '#36302A',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});

export default Home;
