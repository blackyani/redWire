import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Button, Title } from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';

const requiredField = Yup.string().required('The field is required');

const handleSubmit = (values) => {
  console.log(values);
}

const UserData = () => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        name: '',
        lastName: '',
        age: ''
      }}
      validationSchema={Yup.object({
        name: requiredField,
        lastName: requiredField,
        age: Yup.number().required('The age is required'),
      })}
      onSubmit={values => handleSubmit(values)}
    >
      {
        ({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
          <View style={{padding: 20}}>
            <TextInput
              label="name"
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              error={!!errors.name && touched.name}
              mode="flat"
            />

            <TextInput
              label="Last name"
              value={values.lastName}
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              error={!!errors.lastName && touched.lastName}
              mode="flat"
            />

            <TextInput
              label="Age"
              value={values.age}
              onChangeText={handleChange('age')}
              onBlur={handleBlur('age')}
              error={!!errors.age && touched.age}
              mode="flat"
            />

            <Button
              mode="contained"
              style={{marginTop: 10}}
              onPress={handleSubmit}
            >Update</Button>

          </View>
        )
      }
    </Formik>
  );
};

export default UserData;
