import { View, Text , StyleSheet, Dimensions, TextInput} from 'react-native'
import React, {useState} from 'react'
import { EvilIcons } from '@expo/vector-icons';

const WeatherSearch = ({fetchWeatherData}) => {
    const[cityName, setCityname] = useState('');

  return (
    <View style ={styles.searchBar}>
      <TextInput
        placeholder='Search City'
        value={cityName}
        onChangeText={(text) => setCityname(text)}
      />
      <EvilIcons name='search' size={28} color='black'
        onPress={() => fetchWeatherData(cityName)}
      />
    </View>
  )
};

export default WeatherSearch;

const styles =  StyleSheet.create({

    searchBar:{
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 18,
        justifyContent: 'space-between',
        width:Dimensions.get('screen').width -20,
        borderWidth:1.5,
        borderColor: '#b8bdbf',
        paddingVertical: 10,
        borderRadius:25,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: '#e4eaed'
    }
})