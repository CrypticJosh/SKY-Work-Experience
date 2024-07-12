import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import RecipeDetailScreen from './screens/RecipeDetailScreen';
import AddRecipeScreen from './screens/AddRecipeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ChoiceScreen from './screens/ChoiceScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Back">
          <Stack.Screen name="Back" component={ChoiceScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
          <Stack.Screen name="AddRecipe" component={AddRecipeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
