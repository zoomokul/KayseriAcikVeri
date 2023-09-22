
import {Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Screen9 = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch data from the endpoint
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://acikveri.kayseri.bel.tr/api/kbb/vefat'
        );
        const jsonData = await response.json();

        // Assuming the response data is an array
        setData(jsonData);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Text style={styles.announcementTitle}>Kayseri Vefatlarımız</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.label}>Adı Soyadı:</Text>
              <Text style={styles.announcementDetail}>{item.adiSoyadi}</Text>
              <Text style={styles.label}>Anne Baba Adı:</Text>
              <Text style={styles.announcementDetail}>{item.anneBabaAdi}</Text>
              <Text style={styles.label}>Doğum Yeri:</Text>
              <Text style={styles.announcementDetail}>{item.dogumYeri}</Text>
              <Text style={styles.label}>Doğum Yılı:</Text>
              <Text style={styles.announcementDetail}>{item.dogumYili}</Text>
              <Text style={styles.label}>Mezarlık Yeri:</Text>
              <Text style={styles.announcementDetail}>{item.mezarlikYeri}</Text>
              <Text style={styles.label}>Vakit:</Text>
              <Text style={styles.cardText}>{item.vakit}</Text>
              <Text style={styles.label}>Taziye Adresi:</Text>
              <Text style={styles.cardText}>{item.taziyeAdresi}</Text>
            </View>
          )}
        />
      )}
      <Text style={styles.cardText}>
        Başımız sağ olsun, Allah Rahmet eylesin....
      </Text>
      <Button title="Go Back" onPress={goBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0', // Light gray background
    padding: 16,
  },
  card: {
    backgroundColor: '#F5F5F5', // Light gray card
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333', // Dark gray border
    padding: 16,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 16,
    color: '#333', // Dark gray text
  },
  announcementTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // Black title
    marginBottom: 16,
  },
  announcementDetail: {
    fontSize: 18,
    color: '#000', // Black text for details
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444', // Gray label
    marginBottom: 4,
  },
});

export default Screen9;
