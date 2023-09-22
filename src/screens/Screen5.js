
import { Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import axios from 'axios';

const CardComponent = ({ item }) => {
  return (
    <Card containerStyle={styles.card}>
      <Text style={styles.title}>Alan Adı: {item.ADI}</Text>
      <Text style={styles.text}>Adres: {item.ADRES_DETA}</Text>
      <Text style={styles.text}>Açıklama: {item.ACIKLAMA}</Text>
    </Card>
  );
};

const Screen5 = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the provided endpoint
    axios
      .get('https://acikveri.kayseri.bel.tr/uploads/data/2023/9/13/afet_toplanma_yerleri_alan-3514333.json')
      .then((response) => {
        setData(response.data.features);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const goBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <ScrollView style={styles.container}>
      {data.map((item, index) => (
        <CardComponent key={index} item={item.properties} />
      ))}
    </ScrollView>
      
      {/* Button to navigate back to the Home page */}
      <Button title="Go Back" onPress={goBack} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  card: {
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
});

export default Screen5;
