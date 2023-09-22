
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput , Button } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import axios from 'axios';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9981135393846597/3892265740';

const CardComponent = ({ item }) => {
  return (
    <Card containerStyle={styles.card}>
      <Text style={styles.title}>Adı: {item.ADI || 'N/A'}</Text>
      <Text style={styles.text}>Gün: {item.PAZARGUNAD || 'N/A'}</Text>
      <Text style={styles.text}>Açıklama: {item.ACIKLAMA || 'N/A'}</Text>
    </Card>
  );
};


const Screen1 = ({ navigation }) => {


  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Fetch data from the provided endpoint
    axios
      .get('https://acikveri.kayseri.bel.tr/uploads/data/2023/9/21/pazar_yeri-2652486.json')
      .then((response) => {
        setData(response.data.features);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filteredData = data.filter((item) => {
    const searchTerm = searchText.toLowerCase();
    const itemAdi = (item.properties.ADI || '').toLowerCase();
    const itemPazargunad = (item.properties.PAZARGUNAD || '').toLowerCase();
    return itemAdi.includes(searchTerm) || itemPazargunad.includes(searchTerm);
  });


  const goBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={styles.searchInput}
        placeholder="Pazar yeri yada gün adı ile arayın"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <ScrollView style={styles.resultContainer}>
        {filteredData.map((item, index) => (
          <CardComponent key={index} item={item.properties} />
        ))}
      </ScrollView>
      
      {/* Button to navigate back to the Home page */}
      <Button title="Go Back" onPress={goBack} />
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
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
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  resultContainer: {
    flex: 1,
  },
});
export default Screen1;
