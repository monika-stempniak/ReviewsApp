import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

import {globalStyles} from '../styles/global';
import FlatButton from '../shared/Button';

const reviewSchema = yup.object({
  title: yup
    .string()
    .required()
    .min(4),
  body: yup
    .string()
    .required()
    .min(8),
  rating: yup
    .number()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', val => {
      return parseInt(val) > 0 && parseInt(val) < 6;
    }),
});

const ReviewForm = ({addReview}) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{title: '', body: '', rating: ''}}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}>
        {({
          values,
          handleChange,
          touched,
          errors,
          isValid,
          dirty,
          handleSubmit,
          handleBlur,
        }) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
            />
            <Text style={globalStyles.errorText}>
              {touched.title && errors.title}
            </Text>

            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review body"
              onChangeText={handleChange('body')}
              onBlur={handleBlur('body')}
              value={values.body}
              minHeight={80}
            />
            <Text style={globalStyles.errorText}>
              {touched.body && errors.body}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={handleChange('rating')}
              onBlur={handleBlur('rating')}
              value={values.rating}
              keyboardType="numeric"
            />
            <Text style={globalStyles.errorText}>
              {touched.rating && errors.rating}
            </Text>

            <FlatButton
              text="submit"
              onPress={handleSubmit}
              disabled={!(isValid && dirty)}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;
