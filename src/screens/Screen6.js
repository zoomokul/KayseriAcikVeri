
import { Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView ,Text} from 'react-native';
import Axios from 'axios';
import EarthquakeCard from './EarthquakeCard';

const Screen6 = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };
  const [earthquakes, setEarthquakes] = useState([]);

  useEffect(() => {
    // Fetch earthquake data from the API
    Axios.get('https://acikveri.kayseri.bel.tr/api/kbb/eq')
      .then((response) => {
        setEarthquakes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ textAlign: 'center', fontSize: 20, padding: 10 }}>Kayseri Günlük Deprem Verileri</Text>

<ScrollView>
  {earthquakes.map((earthquake, index) => (
    <EarthquakeCard key={index} earthquake={earthquake} />
  ))}
</ScrollView>
      
      {/* Button to navigate back to the Home page */}
      <Button title="Go Back" onPress={goBack} />
    </View>
  );
};

export default Screen6;
