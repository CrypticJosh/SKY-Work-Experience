import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { TextInput, Button, Title, Divider, Menu, Checkbox, Text } from 'react-native-paper';
import recipes from '../data/recipes'


const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [visible, setVisible] = useState(false); // State for menu visibility
  const [filters, setFilters] = useState({}); // State for selected filters

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleSearch = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(lowerCaseQuery) ||
      recipe.ingredients.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredRecipes(filtered);
  };

  const applyFilters = () => {
    const filtered = recipes.filter(recipes => {
      if (Object.keys(filters).length === 0) return true; // If no filters selected, return all recipes
      return Object.keys(filters).every(filter => {
        return filters[filter] === true ? recipes.dietaryRequirements?.includes(filter) : true;
      });
    });
    console.log(filtered);
    setFilteredRecipes(filtered);
    closeMenu();
  };

  const clearFilters = () => {
    setFilters({});
    setFilteredRecipes(recipes);
    closeMenu();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('RecipeDetail', { recipe: item, instructions: item.instructions })}>
      <ImageBackground source={item.image} style={styles.imageBackground} imageStyle={styles.imageStyle}>
        <View style={styles.itemContainer}>
          <Title style={styles.title}>{item.title}</Title>
        </View>
      </ImageBackground>
      <Divider />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          label="Search Recipes"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.input}
        />
        <Button mode="contained" onPress={handleSearch} style={styles.button}>
          Search
        </Button>
      </View>
      <Button mode="contained" onPress={openMenu} style={styles.filterButton}>
        Filter Recipes
      </Button>
      <FlatList
        data={filteredRecipes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Button onPress={openMenu}>Show menu</Button>}
        contentStyle={styles.menu}
      >
        <Text style={styles.menuTitle}>Dietary Requirements</Text>
        <Checkbox.Item
          label="Vegetarian"
          status={filters['vegetarian'] ? 'checked' : 'unchecked'}
          onPress={() => setFilters({ ...filters, 'vegetarian': !filters['vegetarian'] })}
        />
        <Checkbox.Item
          label="Vegan"
          status={filters['vegan'] ? 'checked' : 'unchecked'}
          onPress={() => setFilters({ ...filters, 'vegan': !filters['vegan'] })}
        />
        <Checkbox.Item
          label="Gluten-Free"
          status={filters['gluten-free'] ? 'checked' : 'unchecked'}
          onPress={() => setFilters({ ...filters, 'gluten-free': !filters['gluten-free'] })}
        />
        <Button onPress={applyFilters} mode="contained" style={styles.applyButton}>Apply Filters</Button>
        <Button onPress={clearFilters} mode="outlined" style={styles.clearButton}>Clear Filters</Button>
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // Adjust background color if needed
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C39BD3', // Purple background color
  },
  filterButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    backgroundColor: '#C39BD3', // Purple background color
  },
  list: {
    flex: 1,
  },
  itemContainer: {
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black background
    borderRadius: 10, // Rounded corners for the item container
  },
  title: {
    fontSize: 24,
    color: '#FFF', // White text color
    textAlign: 'center',
  },
  imageBackground: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10, // Rounded corners for the image background
    overflow: 'hidden', // Ensures children components respect the borderRadius
  },
  imageStyle: {
    borderRadius: 10, // Rounded corners for the image itself
  },
  menu: {
    padding: 20,
    width: '80%',
  },
  menuTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  applyButton: {
    marginTop: 10,
  },
  clearButton: {
    marginTop: 10,
    borderColor: '#C39BD3',
  },
});

export default HomeScreen;
