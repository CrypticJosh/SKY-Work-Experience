import { Text, SafeAreaView, StyleSheet, View, Alert, Image } from 'react-native';
import * as React from 'react';
import { Video } from 'expo-av';
import { TextInput, Button } from 'react-native-paper';
import {Kanit_200ExtraLight, Kanit_400Regular} from '@expo-google-fonts/kanit';
import {useFonts} from 'expo-font';

export default function App() {
  const video = React.useRef(null);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [fontsLoaded] = useFonts ({
    Kanit_200ExtraLight,
    Kanit_400Regular
  });
  React.useEffect(() => {
    if (video) {
      video.current.playAsync();
    }
  }, [video]);

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
        <Image style={styles.backButton} source={{uri:'https://pnghq.com/wp-content/uploads/2023/02/left-white-arrow-icon-png-6311.png'}}/>
        <Button style={styles.backButton} onPress={() => {Alert.alert('Launch Page','User pressed back button')}}></Button>
        <Text style={styles.instructiveText}>Sign In</Text>
        <Text style={styles.welcomeText}>It's great to see you again!</Text>
        <View style={styles.containerCover}></View>
        <TextInput
          theme={{ roundness: 10 }}
          style={styles.emailInput}
          label="Email"
          value={email}
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          theme={{ roundness: 10 }}
          style={styles.passwordInput}
          label="Password"
          value={password}
          onChangeText={password => setPassword(password)}
          secureTextEntry
        />
        <Button style={styles.logInButton} onPress={() => {Alert.alert('Login','Event User Login - Existing')}}>
        Log In
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
    width: '50%',
    position: 'absolute',
    zIndex: 2,
    top: 500,
    borderRadius: 10,
  },
  passwordInput: {
    height: 50,
    resizeMode: 'stretch',
    alignSelf: 'center',
    width: '50%',
    position: 'absolute',
    zIndex: 2,
    top: 560,
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
  instructiveText: {
    zIndex: 2,
    color: '#fff',
    position: 'absolute',
    top: 250,
    alignSelf: 'center',
    fontSize: 75,
    fontFamily: 'Kanit_400Regular'
  },
  welcomeText: {
    zIndex: 2,
    color: '#fff',
    position: 'absolute',
    top: 350,
    alignSelf: 'center',
    fontSize: 30,
    fontFamily: 'Kanit_200ExtraLight'

  }
});
