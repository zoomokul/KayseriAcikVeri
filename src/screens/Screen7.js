
import { Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { Card, Text } from 'react-native-elements';

const Screen7 = ({ navigation }) => {

  const goBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };
  const [boroughs, setBoroughs] = useState([]);

  useEffect(() => {
    // Fetch the list of boroughs from the first endpoint
    axios
      .get('https://acikveri.kayseri.bel.tr/api/kbb/ilceler')
      .then((response) => {
        setBoroughs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <View >
        <FlatList
        data={boroughs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              // Navigate to the second screen with the selected borough's ID
              navigation.navigate('BoroughDetailScreen', { boroughId: item.boroughId });
            }}
          >
            <Card containerStyle={styles.card}>
              
              <Text style={styles.cardText}>İlçe Adı: {item.boroughName}</Text>
              <Text style={styles.cardText}>İlçe Alan: {item.area}</Text>
              <Text style={styles.cardText}>İlçe Nüfus: {item.population}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
      
      {/* Button to navigate back to the Home page */}
      <Button title="Go Back" onPress={goBack} />
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
    
    borderColor: '#ddd',

    borderRadius: 10,
    marginVertical: 10,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 8,
  },
});
export default Screen7;
