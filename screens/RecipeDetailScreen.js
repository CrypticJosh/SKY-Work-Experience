import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const RecipeDetailScreen = ({ route }) => {
  const { recipe, instructions } = route.params;

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={recipe.image} style={styles.imageBackground} imageStyle={styles.imageStyle}>
        <Text style={styles.title}>{recipe.title}</Text>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          <Text style={styles.sectionText}>{recipe.ingredients}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Instructions</Text>
          <Text style={styles.sectionText}>{instructions}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  imageBackground: {
    width: '100%',
    height: 300, // Adjust height as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 10, // Rounded corners for the image itself
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF', // White text color
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black background
    padding: 10,
    borderRadius: 10, // Rounded corners for the title background
    overflow: 'hidden', // Ensures children components respect the borderRadius
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
  },
});

export default RecipeDetailScreen;
