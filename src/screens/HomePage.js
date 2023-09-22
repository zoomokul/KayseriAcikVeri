import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const Button = ({ onPress, imageSource, backgroundColor, text }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{ ...styles.button, backgroundColor }}
  >
    <Image
      source={imageSource}
      style={styles.image}
    />
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

const HomePage = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const buttons = [
    {
      onPress: () => navigateToScreen('Screen8'),
      imageSource: require('./images/gezilecekyerler.png'),
      text: 'Gezilecek Görülecek Yerler',
    },
    {
      onPress: () => navigateToScreen('Screen3'),
      imageSource: require('./images/wifi.png'),
      text: 'Ücretsiz WIFI Noktaları',
    },
    {
      onPress: () => navigateToScreen('Screen2'),
      imageSource: require('./images/eczane.png'),
      text: 'Nöbetçi Eczaneler',
    },
    {
      onPress: () => navigateToScreen('Screen1'),
      imageSource: require('./images/pazaryeri.png'),
      text: 'Pazar Yerleri',
    },
    {
      onPress: () => navigateToScreen('Screen7'),
      imageSource: require('./images/ilcemahalle.png'),
      text: 'İlçe-Muhtar Bilgileri',
    },
   
    {
      onPress: () => navigateToScreen('Screen6'),
      imageSource: require('./images/deprem.png'),
      text: 'Günlük Deprem Verileri',
    },
    {
      onPress: () => navigateToScreen('Screen5'),
      imageSource: require('./images/toplanmaalan.png'),
      text: 'Afet Toplanma Yerleri',
    },
  
  
  
    {
      onPress: () => navigateToScreen('Screen9'),
      imageSource: require('./images/vefat.png'),
      text: 'Vefat ilanları',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayseri Açık Veri</Text>
      <ScrollView contentContainerStyle={styles.buttonContainer}>
        {buttons.map((button, index) => (
          <Button key={index} {...button} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // Background color
  },
  title: {
    fontSize: 28, // Increased font size
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Roboto', // Change font family
    color: '#333', // Text color
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    width: 120,
    height: 160, // Increased height to accommodate text
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  buttonText: {
    marginTop: 10, // Spacing between image and text
    textAlign: 'center', // Center-align the text
    fontSize: 16, // Increased font size
    fontFamily: 'Roboto', // Change font family
    color: '#666', // Text color
  },
});

export default HomePage;
