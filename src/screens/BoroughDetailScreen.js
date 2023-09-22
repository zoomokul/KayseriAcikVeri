import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { Card } from 'react-native-elements';

const BoroughDetailScreen = ({ route }) => {
  const { boroughId } = route.params;
  const [boroughInfo, setBoroughInfo] = useState(null);

  useEffect(() => {
    // Fetch borough information from the second endpoint using the selected ID
    axios
      .get(`https://acikveri.kayseri.bel.tr/api/kbb/muhtarlar/${boroughId}`)
      .then((response) => {
        setBoroughInfo(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [boroughId]);

  if (!boroughInfo) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={boroughInfo}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card containerStyle={styles.card}>
            <Text style={styles.cardText}>Mahalle Adı: {item.neighborhoodName}</Text>
            <Text style={styles.cardText}>Muhtar Adı: {item.name}</Text>
            <Text style={styles.cardText}>Mahalle Nüfus: {item.population}</Text>
            <Text style={styles.cardText}>GSM: {item.gsm}</Text>
            <Text style={styles.cardText}>Telefon: {item.phone}</Text>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default BoroughDetailScreen;
