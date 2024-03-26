import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import WeatherSearch from './search';

const WeatherInfo = ({weatherData, fetchWeatherData}) => {
    const {
        name,
        visibility,
        weather: [{icon, description}],
        main: {temp, humidity, feels_like},
        wind: {speed},
        sys: {sunrise, sunset},
    } = weatherData;
  return (
    <SafeAreaView style={styles.container}>
        <WeatherSearch fetchWeatherData={fetchWeatherData} />
        <View style={{alignItems: 'center'}}>
            <Text style={styles.title}>{name}</Text>    
        </View>
        <View style={styles.logo}>
            <Image
                style={styles.largeIcon}
                source={{uri: `https://openweathermap.org/img/wn/${icon}.png`}}
            />
            <View style={styles.current}>
                <Text style={styles.description}>Currently</Text>
                <Text style={styles.currentTemp}>{temp} °C</Text>
                <Text style={styles.description}>Mostly {description}</Text>
            </View>
            
        </View>
        
        <ScrollView>
            <View style={styles.extraInfo}>
                <View style={styles.info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/temp.png') }
                    />
                    <Text style={styles.infoText}>{feels_like} °C</Text>
                    <Text style={styles.infoText}>Feels Like</Text>
                </View>
                <View style={styles.info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/humidity.png') }
                    />
                    <Text style={styles.infoText}>{humidity} %</Text>
                    <Text style={styles.infoText}>Humidity</Text>
                </View>
            </View>
            <View style={styles.extraInfo}>
                <View style={styles.info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/visibility.png') }
                    />
                    <Text style={styles.infoText}>{visibility}</Text>
                    <Text style={styles.infoText}>Visibility</Text>
                </View>
                <View style={styles.info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/windspeed.png') }
                    />
                    <Text style={styles.infoText}>{speed} km/h</Text>
                    <Text style={styles.infoText}>Wind Speed</Text>
                </View>
            </View>
            <View style={styles.extraInfo}>
                <View style={styles.info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/sunrise.png') }
                    />
                    <Text style={styles.infoText}>{new Date (sunrise*1000).toLocaleString()}</Text>
                    <Text style={styles.infoText}>Sunrise</Text>
                </View>
                <View style={styles.info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/sunset.png') }
                    />
                    <Text style={styles.infoText}>{new Date (sunset*1000).toLocaleString()}</Text>
                    <Text style={styles.infoText}>Sunset</Text>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
};

export default WeatherInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15
    },

    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        fontFamily:'monospace',
        marginTop: 30,
    },

    logo: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-around',
    },

    largeIcon: {
        width:200,
        height:200,
    },

    currentTemp: {
        fontSize:40,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'justify',
        marginRight: 20,
    },

    description: {
        textAlign: 'justify',
        color:'white',
        fontSize: 18,
    },

    current:{
        flexDirection:'column',
        justifyContent:'space-between',
        padding:7,
    },

    extraInfo:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:7,
    },
    info: {
        width:Dimensions.get('screen').width/2.5,
        backgroundColor: 'rgba(255, 255, 255, 0.29)',
        padding:10,
        borderRadius:15,
        marginLeft:20,
        marginRight:13,
        justifyContent:'center',
    },

    smallIcon: {
        height: 40,
        width: 40,
        borderRadius: 40/2,
        marginLeft:40
    },

    infoText: {
        textAlign:'center',
        fontSize:18,
    }

})