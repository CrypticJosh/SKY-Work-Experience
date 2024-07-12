import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Alert,
  Image,
  Switch,
} from 'react-native';
import * as React from 'react';
import { Video } from 'expo-av';
import { TextInput, Button } from 'react-native-paper';
import {
  Kanit_200ExtraLight,
  Kanit_400Regular,
} from '@expo-google-fonts/kanit';
import { useFonts } from 'expo-font';

const SignupScreen = ({ navigation }) => {
  const handleSignup = () => {
    // Perform signup logic here, e.g., API calls, user creation, etc.

    // Assuming successful signup, navigate to HomeScreen
    navigation.navigate('Home');
  };
  const video = React.useRef(null);
  const [firstName, setFirstName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [isAccepted, setIsAccepted] = React.useState(false);
  const [fontsLoaded] = useFonts({
    Kanit_200ExtraLight,
    Kanit_400Regular,
  });

  React.useEffect(() => {
    if (video) {
      video.current?.playAsync(null);
    }
  }, [video]);
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: 'https://assets.mixkit.co/videos/43925/43925-720.mp4',
          }}
          isLooping
          resizeMode="cover"
        />
        <Image
          style={styles.backButton}
          source={{
            uri: 'https://pnghq.com/wp-content/uploads/2023/02/left-white-arrow-icon-png-6311.png',
          }}
        />
        <Button
          style={styles.backButtonButton}
          onPress={() => {
            navigation.navigate("Back");
          }}></Button>
        <Text style={styles.instructiveText}>Sign Up</Text>
        <Text style={styles.welcomeText}>It's great to have you here!</Text>
        <View style={styles.containerCover}></View>
        <TextInput
          theme={{ roundness: 10 }}
          style={styles.firstNameInput}
          label="First Name"
          value={firstName}
          onChangeText={(firstName) => setFirstName(firstName)}
        />
        <TextInput
          theme={{ roundness: 10 }}
          style={styles.surnameInput}
          label="Surname"
          value={surname}
          onChangeText={(surname) => setSurname(surname)}
        />
        <TextInput
          theme={{ roundness: 10 }}
          style={styles.emailInput}
          label="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          theme={{ roundness: 10 }}
          style={styles.passwordInput}
          label="Password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          secureTextEntry
        />
        <TextInput
          theme={{ roundness: 10 }}
          style={styles.confirmPasswordInput}
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={(confirmPassword) =>
            setConfirmPassword(confirmPassword)
          }
          secureTextEntry
        />
        <Switch
          style={styles.termsSwitch}
          value={isAccepted}
          onValueChange={(isAccepted) => setIsAccepted(isAccepted)}
        />
        <Text style={styles.termsStatement}>
          I confirm that I have read and accept the Terms of Service.
        </Text>
        <Button
          style={styles.logInButton}
          onPress={() => {
            navigation.navigate("Home");
          }}>
          Sign Up
        </Button>
      </View>
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    position: 'relative',
  },
  video: {
    alignSelf: 'center',
    resizeMode: 'cover',
    width: '115%',
    height: '115%',
    justifyContent: 'space-between',
  },
  containerCover: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  emailInput: {
    height: 50,
    resizeMode: 'stretch',
    alignSelf: 'center',
    width: '70%',
    position: 'absolute',
    zIndex: 2,
    top: 395,
    borderRadius: 10,
  },
  passwordInput: {
    height: 50,
    resizeMode: 'stretch',
    alignSelf: 'center',
    width: '70%',
    position: 'absolute',
    zIndex: 2,
    top: 455,
    borderRadius: 10,
  },
  confirmPasswordInput: {
    height: 50,
    resizeMode: 'stretch',
    alignSelf: 'center',
    width: '70%',
    position: 'absolute',
    zIndex: 2,
    top: 515,
    borderRadius: 10,
  },

  logInButton: {
    height: 40,
    resizeMode: 'stretch',
    alignSelf: 'center',
    width: '50%',
    position: 'absolute',
    zIndex: 2,
    top: 650,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  backButton: {
    height: 35,
    width: 35,
    left: 25,
    position: 'absolute',
    top: 50,
    zIndex: 2,
  },
  backButtonButton: {
    height: 50,
    width: 50,
    left: 25,
    position: 'absolute',
    top: 50,
    zIndex: 2,
  },
  instructiveText: {
    zIndex: 2,
    color: '#fff',
    position: 'absolute',
    top: 100,
    alignSelf: 'center',
    fontSize: 75,
    fontFamily: 'Kanit_400Regular',
  },
  welcomeText: {
    zIndex: 2,
    color: '#fff',
    position: 'absolute',
    top: 200,
    alignSelf: 'center',
    fontSize: 30,
    fontFamily: 'Kanit_200ExtraLight',
  },
  firstNameInput: {
    height: 50,
    resizeMode: 'stretch',
    alignSelf: 'center',
    width: '70%',
    position: 'absolute',
    zIndex: 2,
    top: 275,
    borderRadius: 10,
  },
  surnameInput: {
    height: 50,
    resizeMode: 'stretch',
    alignSelf: 'center',
    width: '70%',
    position: 'absolute',
    zIndex: 2,
    top: 335,
    borderRadius: 10,
  },
  termsSwitch: {
    zIndex: 2,
    position: 'absolute',
    top: 580,
    left: 60,
  },
  termsStatement: {
    zIndex: 2,
    position: 'absolute',
    top: 580,
    left: 120,
    width: 236,
    color: '#fff',
    fontFamily: 'Kanit_200ExtraLight',
  },
});

export default SignupScreen;