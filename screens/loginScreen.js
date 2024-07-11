import { Text, SafeAreaView, StyleSheet, View} from 'react-native';
import * as React from 'react';
import { Video } from 'expo-av';
import { TextInput } from 'react-native-paper';

export default function App() {
  const video = React.useRef(null);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  React.useEffect (() => {
    if (video) {
      video.current.playAsync();
  } 
  }, [video]);
  
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Video
      ref = {video}
      style = {styles.video}
      source = {{
        uri: 'https://assets.mixkit.co/videos/43925/43925-720.mp4'
      }}
      isLooping
      resizeMode='cover'
      />
      <TextInput style={styles.textContainer} label='Email' value={email}/>
    </View>
    <View>
    
    </View>
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
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  textContainer: {
    height: 50,
    alignSelf: 'center',
    Left: 20,
    width: '50%',
    position: 'absolute',
    zIndex: 2,
    top: 500,
  }
});
