import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const ChoiceScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Login')}
        style={styles.button}>
        Login
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Signup')}
        style={styles.button}>
        Signup
      </Button>
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
    width: '80%',
    marginVertical: 10,
    backgroundColor: '#9B59B6', // Adjust to match the search button color
  },
});

export default ChoiceScreen;
