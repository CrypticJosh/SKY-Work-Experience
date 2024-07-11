import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    // Assuming successful login, navigate to HomeScreen
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TextInput label="Username" style={styles.input} />
      <TextInput label="Password" secureTextEntry style={styles.input} />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
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

export default LoginScreen;
