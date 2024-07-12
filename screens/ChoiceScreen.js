import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import {Video} from 'expo-av';

 

const ChoiceScreen = ({ navigation }) => {
  const video = React.useRef(null);
   React.useEffect(() => {
    if (video) {
      video.current?.playAsync(null);
    }
  }, [video]);
  return (
    <View style={styles.container}>
      <Video
      ref={video}
      style={styles.video}
      source={{
      uri: 'https://assets.mixkit.co/videos/43925/43925-720.mp4',
      }}
      isLooping
      resizeMode="cover"/>
      <View style={styles.containerCover}></View>
      <Image source={{uri: 'https://cdn.images.express.co.uk/img/dynamic/78/590x/secondary/south-america-alpaca-wool-video-5482797.jpg?r=1720513014881'}} style={styles.logo}/>
      <Button style={styles.logInButton}
        onPress={() => navigation.navigate('Login')}>Log In</Button>
      <Button style={styles.signUpButton}
        onPress={() => navigation.navigate('Signup')}>Sign Up</Button>
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
  video: {
    position: 'absolute',
    width: '115%',
    height: '115%',
    alignSelf: 'center',
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
  logInButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '80%',
    position: 'absolute',
    top: 750
  },
  signUpButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '80%',
    position: 'absolute',
    top: 800

  },
  logo: { ///RESIZE HERE
    position: 'absolute',
    width: '50%',
    height: '20%',
    resizeMode: 'cover',
    top: 100

  }
});

export default ChoiceScreen;
