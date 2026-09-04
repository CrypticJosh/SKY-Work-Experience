# 🍪 Snacks From Scratch

**Snacks From Scratch** is a mobile recipe application built with **React Native and Expo**, designed to help users discover, search, filter, and create recipes.

The app provides a collection of recipes with ingredients, instructions, images, and dietary information. Users can browse recipes, search by recipe name or ingredients, filter recipes based on dietary requirements, view individual recipes, and add their own recipes.

## ✨ Features

### 🔍 Search

Search through recipes using:

* Recipe names
* Ingredients

This makes it easier to find something to cook based on either what you want to make or the ingredients you already have.

### 🥗 Dietary Filters

Recipes can be filtered based on dietary requirements, including:

* Vegetarian
* Vegan
* Gluten-Free

Multiple filters can be selected to narrow down the available recipes.

### 📖 Recipe Details

Each recipe has its own detail page containing:

* Recipe image
* Recipe name
* Ingredients
* Cooking instructions

### ➕ Create a Recipe

Users can create and add their own recipes by providing:

* Recipe name
* Ingredients
* Instructions

Recipes are handled through the application's recipe action/state system.

### 🔐 Account Screens

Snacks From Scratch includes:

* Login
* Sign Up

screens as part of the application's user experience.

### 🎨 Custom UI

The application uses a food-focused interface with:

* Recipe image cards
* Custom fonts
* Custom application imagery
* Video backgrounds on the initial authentication screens
* React Native Paper UI components

---

## 📱 Screens

The application is split into several screens:

| Screen                   | Description                                                             |
| ------------------------ | ----------------------------------------------------------------------- |
| **Choice Screen**        | Starting point where users can choose between logging in and signing up |
| **Login Screen**         | User login interface                                                    |
| **Signup Screen**        | User registration interface                                             |
| **Home Screen**          | Browse, search and filter recipes                                       |
| **Recipe Detail Screen** | View the full details of a selected recipe                              |
| **Add Recipe Screen**    | Create and add a new recipe                                             |

Navigation between these screens is handled using **React Navigation**.

---

## 🍴 Recipes

Snacks From Scratch comes with a selection of recipes covering a range of different foods.

Some of the recipes included in the application are:

* 🍪 Chocolate Chip Cookies
* 🥗 Caprese Salad
* 🥑 Guacamole
* 🍛 Chicken Curry
* 🌯 Chicken Fajitas
* 🌮 Beef Tacos
* 🥗 Caesar Salad
* 🍕 Margherita Pizza
* 🍝 Spaghetti Carbonara
* 🥞 Pancakes
* 🧁 Cupcakes
* 🌱 Vegan Cupcakes

Recipe information is stored locally in:

```text
data/recipes.js
```

Recipe images are stored in the `assets` directory.

---

## 🛠️ Tech Stack

| Technology              | Usage                               |
| ----------------------- | ----------------------------------- |
| **React Native**        | Mobile application development      |
| **Expo**                | Development and application tooling |
| **React Navigation**    | Navigation between screens          |
| **React Native Paper**  | UI components                       |
| **Redux / React Redux** | Application state management        |
| **Expo Image Picker**   | Image selection                     |
| **Expo AV**             | Audio/video functionality           |
| **Kanit**               | Custom application font             |

---

## 📂 Project Structure

```text
SKY-Work-Experience/
│
├── actions/
│   └── recipeActions.js
│
├── assets/
│   ├── app_logo.jpg
│   ├── chocolate_chip_cookies.jpg
│   ├── caprese_salad.jpg
│   ├── guacamole.jpg
│   ├── chicken_curry.jpg
│   ├── chicken_fajitas.jpg
│   ├── beef_tacos.jpg
│   ├── caeser_salad.jpg
│   ├── margharita_pizza.jpg
│   ├── spaghetti_carbonara.jpg
│   ├── pancake.jpg
│   ├── cupcakes.jpg
│   └── ...
│
├── components/
│   └── RecipeCard.js
│
├── contexts/
│
├── data/
│   └── recipes.js
│
├── screens/
│   ├── AddRecipeScreen.js
│   ├── ChoiceScreen.js
│   ├── HomeScreen.js
│   ├── LoginScreen.js
│   ├── RecipeDetailScreen.js
│   └── SignupScreen.js
│
├── App.js
├── app.json
├── babel.config.js
├── eas.json
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

You'll need:

* [Node.js](https://nodejs.org/)
* npm
* Expo
* An Android emulator, iOS simulator, or physical mobile device

### Installation

Clone the repository:

```bash
git clone https://github.com/CrypticJosh/SKY-Work-Experience.git
```

Navigate into the project:

```bash
cd SKY-Work-Experience
```

Install the required dependencies:

```bash
npm install
```

### Running the App

Start the Expo development server:

```bash
npm start
```

You can then open Snacks From Scratch on a connected device or emulator through Expo.

For Android:

```bash
npm run android
```

For iOS:

```bash
npm run ios
```

For web:

```bash
npm run web
```

---

## 🧭 Application Flow

```text
                 ┌─────────────────┐
                 │  Choice Screen  │
                 └────────┬────────┘
                          │
                ┌─────────┴─────────┐
                │                   │
          ┌─────▼─────┐       ┌─────▼─────┐
          │   Login   │       │  Sign Up  │
          └─────┬─────┘       └─────┬─────┘
                │                   │
                └─────────┬─────────┘
                          │
                   ┌──────▼──────┐
                   │ Home Screen │
                   └──────┬──────┘
                          │
             ┌────────────┼────────────┐
             │            │            │
        ┌────▼────┐ ┌─────▼─────┐ ┌────▼─────┐
        │ Search  │ │  Filter   │ │Add Recipe│
        └────┬────┘ └───────────┘ └──────────┘
             │
       ┌─────▼────────────┐
       │ Recipe Details   │
       │                  │
       │ • Image          │
       │ • Ingredients    │
       │ • Instructions   │
       └──────────────────┘
```

---

## 🧑‍💻 Development

The main entry point is:

```text
App.js
```

The application uses a stack navigator to move between the different screens.

Recipes are stored in:

```text
data/recipes.js
```

and recipe-related actions are handled in:

```text
actions/recipeActions.js
```

For example, the application includes an action for adding recipes:

```js
export const addRecipe = (recipe) => ({
  type: 'ADD_RECIPE',
  payload: recipe,
});
```

Reusable recipe UI is separated into components such as:

```text
components/RecipeCard.js
```

This keeps the application's screens more organised and makes common UI elements reusable.

---

## 🎯 Project Goals

Snacks From Scratch was developed to gain practical experience in mobile application development and modern JavaScript frameworks.

The project focuses on:

* Building a mobile application with React Native
* Working with Expo
* Creating reusable React components
* Implementing screen navigation
* Managing application data and state
* Building search functionality
* Implementing filtering functionality
* Creating forms for user input
* Designing a mobile user interface
* Working with images and other media
* Using Git and GitHub throughout development

---

## 🔮 Future Improvements

Potential improvements for Snacks From Scratch could include:

* ❤️ Favourite recipes
* 👤 Fully functional user accounts
* ☁️ Cloud-based recipe storage
* 📸 User-uploaded recipe images
* ⭐ Recipe ratings and reviews
* 🕐 Cooking and preparation times
* 👨‍👩‍👧 Serving-size information
* 🏷️ Additional recipe categories
* 🔎 More advanced search
* 💾 Persistent storage for user-created recipes
* 🧪 Automated testing
* 📱 Further UI and accessibility improvements

---

## 📸 Screenshots

Screenshots of Snacks From Scratch can be added here.

For example:

```md
![Home Screen](assets/home-screen.png)

![Recipe Details](assets/recipe-details.png)

![Add Recipe](assets/add-recipe.png)
```

---

## 📚 What I Learned

Through developing Snacks From Scratch, I gained experience with:

* React Native application development
* Expo
* React component architecture
* Navigation and screen management
* State management
* Working with structured recipe data
* Creating search and filtering functionality
* Handling user input and forms
* Building reusable UI components
* Working with local assets
* Structuring a larger application
* Using GitHub for version control

---

## 📄 License

This project was created as part of a work experience/educational project.

---

### 🍪 Snacks From Scratch

*A place to discover, create, and enjoy recipes from scratch.*
