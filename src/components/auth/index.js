import React, { useEffect, useState, useCallback } from "react";
import {View, StyleSheet, ScrollView } from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/actions';
import { Input, Button } from 'react-native-elements';
import {LogoText, Colors, showToast} from "../../utils/tools";

const requiredField = Yup.string().required('The field is required');

const AuthScreen = () => {
  const dispatch = useDispatch();
  const {
    contentContainer, container,
    inputStyle, inputContainerStyle,
    button, buttonTitle
  } = styles;
  const [secureEntry, setSecureEntry] = useState(true);
  const [formType, setFormType] = useState(true);

  const handleSubmit = (values) => {
    if (formType) {
      dispatch(registerUser(values))
    } else {
    }
  }

  useEffect(() => {
    // showToast('info', 'Test message 1', 'Test message 2')
  }, [])

  return (
    <ScrollView contentContainerStyle={contentContainer}>
      <View style={container}>
        <LogoText />
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={Yup.object({
            email: Yup.string().email('Invalid email address').required('The email is required'),
            password: requiredField,
          })}
          onSubmit={values => handleSubmit(values)}
        >
          {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              touched,
              errors
          }) => (
            <>
              <Input
                placeholder="Email"
                leftIcon={{type: 'antdesign', name: 'mail', color: Colors.white}}
                inputStyle={inputStyle}
                renderErrorMessage={errors.email && touched.email}
                errorMessage={errors.email}
                errorStyle={{color: Colors.black}}
                placeholderTextColor={Colors.white}
                inputContainerStyle={inputContainerStyle}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />

              <Input
                placeholder="Password"
                secureTextEntry={secureEntry}
                leftIcon={{type: 'antdesign', name: 'lock', color: Colors.white}}
                inputStyle={inputStyle}
                placeholderTextColor={Colors.white}
                inputContainerStyle={inputContainerStyle}
                rightIcon={{
                  type: 'antdesign',
                  name: secureEntry ? 'eye' : 'eyeo',
                  color: Colors.white,
                  onPress: () => setSecureEntry(!secureEntry)
                }}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                renderErrorMessage={errors.password && touched.password}
                errorMessage={errors.password}
                errorStyle={{color: Colors.black}}
              />

              <Button
                type="clear"
                title={formType ? 'Register' : 'Login'}
                buttonStyle={{ ...button }}
                titleStyle={buttonTitle}
                onPress={handleSubmit}
                // loading={}
              />
              <Button
                type="clear"
                title={!formType ? 'Already registered' : 'Need to sign in?'}
                titleStyle={buttonTitle}
                onPress={() => setFormType(!formType)}
              />
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.red
  },
  container: {
    padding: 50,
    alignItems: 'center'
  },
  inputStyle: {
    fontSize: 15,
    color: Colors.white
  },
  inputContainerStyle: {
    borderBottomWidth: 3,
    borderBottomColor: Colors.black
  },
  button: {
    backgroundColor: Colors.black,
    marginTop: 20
  },
  buttonTitle: {
    width: '100%',
    color: Colors.white,
  },
})

export default AuthScreen;
