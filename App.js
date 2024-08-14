import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState} from 'react';

import Button from './src/button';
import ImageViewer from './src/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import CircleButton from './src/CircleButton';
import IconButton from './src/IconButton';


const PlaceholderImage = require('./assets/images/background-image.png')

export default function App() {
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true);
    } else {
      alert('Você não escolheu nenhuma imagem.')
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    // Vai ser implementado depois...
  };

  const onSaveImageAsync = () => {
    // Vai ser implementado depois...
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer 
        placeholderImageSource={PlaceholderImage} 
        selectedImage={selectedImage}
        />
      </View> 
      <View />
    {showAppOptions ? (
      <View style={styles.optionsContainer}>
        <View style={styles.optionsRow}>
          <IconButton icon='refresh' label='Reset' onPress={onReset} />
          <CircleButton onPress={onAddSticker} />
          <IconButton icon='save-alt' label='Save' onPress={onSaveImageAsync} />
        </View>
      </View>
    ) : (
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Escolha uma foto" onPress={ pickImageAsync	}/>
        <Button label="Use esta foto" onPress={() => setShowAppOptions(true)}/>  
      </View>
      )}    
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  }, 
});
