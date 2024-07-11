import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const SignupScreen = ({ navigation }) => {
  const handleSignup = () => {
    // Perform signup logic here, e.g., API calls, user creation, etc.

    // Assuming successful signup, navigate to HomeScreen
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TextInput label="Username" style={styles.input} />
      <TextInput label="Email" style={styles.input} />
      <TextInput label="Password" secureTextEntry style={styles.input} />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        Continue as Guest
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Adjust background color if needed
  },
  button: {
    width: '90%',
    marginVertical: 10,
    backgroundColor: '#C39BD3', // Adjust button color as needed
  },
  input: {
    width: '90%',
    marginBottom: 10,
  },
});

export default SignupScreen;
