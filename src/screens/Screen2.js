
import { Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView ,Text} from 'react-native';
import Axios from 'axios';
import PharmacyCard from './PharmacyCard';


const Screen2 = ({ navigation }) => {
  const [pharmacies, setPharmacies] = useState([]);

  useEffect(() => {
    // Fetch pharmacy data from the API
    Axios.get('https://acikveri.kayseri.bel.tr/api/kbb/eczane')
      .then((response) => {
        setPharmacies(response.data);
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
        <Text style={{ textAlign: 'center', fontSize: 20, padding: 10 }}>Kayseri İli Nöbetçi Eczane Bilgileri</Text>

<ScrollView>
  {pharmacies.map((pharmacy, index) => (
    <PharmacyCard key={index} pharmacy={pharmacy} />
  ))}
</ScrollView>
      
      {/* Button to navigate back to the Home page */}
      <Button title="Go Back" onPress={goBack} />
    </View>
  );
};

export default Screen2;
