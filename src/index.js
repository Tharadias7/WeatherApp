import { View, Text, StyleSheet, Alert, ActivityIndicator} from 'react-native'
import React, {useState, useEffect} from 'react'
import  Constants  from 'expo-constants'
import WeatherInfo from './WeatherInfo'

const API_KEYS = '779bed878b460946070e5e1270519c85'

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  //add a function to fetch the weather data
  const fetchWeatherData = async (cityName) => {
    try{
      setLoaded(false);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEYS}&units=metric`);
      if (response.status == 200){
        const data = await response.json();
        setWeatherData(data);
        setLoaded(true);

      }else {
        setWeatherData(null);
      }
      setLoaded(true); 

    }catch(error){
      Alert.alert('Error', error.message)
    }

  
  }

  //remember my city name
  useEffect(() => {
    fetchWeatherData('Kelaniya');
  }, []);

  // if the data not loaded, show a loading message
  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="red"/>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <WeatherInfo weatherData={weatherData} fetchWeatherData={fetchWeatherData}/>
    </View>
  );
};

export default Weather;


const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#020c4a',
    paddingTop: Constants.statusBarHeight,
  },

  
});