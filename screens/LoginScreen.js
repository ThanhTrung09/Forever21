import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main1}>
          <Text style={styles.textTitle}>Profile</Text>
          <View style={styles.textBody1}>
            <Text style={styles.textBody2}>*Email Address</Text>
          </View>
          <TextInput
            style={styles.textInput}
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <View style={styles.textBody1}>
            <Text style={styles.textBody2}>*Password</Text>
          </View>
          <TextInput style={styles.textInput} secureTextEntry={true} />
          <TouchableOpacity style={styles.textBody1}>
            <Text style={styles.textBody3}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.main2}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonTitle}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.johnButton}>
            <Text style={styles.loginButtonTitle}>John Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  main1: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  main2: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 20,
    marginVertical: 20,
  },
  textBody1: {
    width: '90%',
  },
  textBody2: {
    alignSelf: 'flex-start',
    fontSize: 15,
  },
  textBody3: {
    fontSize: 15,
  },
  textInput: {
    height: 60,
    width: '90%',
    fontSize: 20,
    borderWidth: 1,
    marginBottom: 30,
  },
  loginButton: {
    width: '90%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffea00',
    marginBottom: 15,
  },
  loginButtonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  johnButton: {
    width: '90%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  viewNavigation: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
