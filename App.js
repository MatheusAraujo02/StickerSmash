import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Button from './src/button';
import ImageViewer from './src/ImageViewer';

const PlaceholderImage = require('./assets/images/background-image.png')

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View> 
      <View style={styles.footerContainer}>
        <Button label="Escolha uma foto"/>
        <Button label="Use esta foto"/>  
      </View>    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    fkex: 1 / 3,
    alignItems: 'center',
  },
 
});
