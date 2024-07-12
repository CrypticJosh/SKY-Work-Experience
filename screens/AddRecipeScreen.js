// AddRecipeScreen.js

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { addRecipe } from '../data/recipes';

const AddRecipeScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleAddRecipe = () => {
    const newRecipe = {
      title,
      ingredients,
      instructions,
      image: require('../assets/default_recipe_image.jpg'), // Replace with actual image path
      dietaryRequirements: [], // Example
    };

    addRecipe(newRecipe);
    navigation.goBack(); // Navigate back to HomeScreen after adding recipe
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Recipe Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        label="Ingredients"
        value={ingredients}
        onChangeText={setIngredients}
        style={styles.input}
        multiline
        numberOfLines={4}
      />
      <TextInput
        label="Instructions"
        value={instructions}
        onChangeText={setInstructions}
        style={styles.input}
        multiline
        numberOfLines={8}
      />
      <Button
        mode="contained"
        onPress={handleAddRecipe}
        style={styles.button}
        labelStyle={styles.buttonLabel}
      >
        Add Recipe
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // Adjust background color if needed
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#eee',
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C39BD3', // Purple background color
  },
  buttonLabel: {
    color: '#000', // White text color
    fontSize: 16,
  },
});

export default AddRecipeScreen;
