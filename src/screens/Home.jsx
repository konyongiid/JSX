import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = () => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);

  const staticWeatherData = {
    name: 'Example City',
    main: {
      temp: 25,
      humidity: 70,
    },
    weather: [
      {
        description: 'clear sky',
        icon: '01d',
      },
    ],
    wind: {
      speed: 3.5,
    },
  };

  const handleSearch = () => {
    if (location.trim() !== '') {
      setWeather(staticWeatherData);
      setHistory([location, ...history.filter(item => item !== location)]);
    }
  };

  const getWeatherIcon = icon => {
    switch (icon) {
      case '01d':
        return 'sunny-outline';
      case '01n':
        return 'moon-outline';
      case '02d':
      case '02n':
        return 'partly-sunny-outline';
      case '03d':
      case '03n':
      case '04d':
      case '04n':
        return 'cloud-outline';
      case '09d':
      case '09n':
      case '10d':
      case '10n':
        return 'rainy-outline';
      case '11d':
      case '11n':
        return 'thunderstorm-outline';
      case '13d':
      case '13n':
        return 'snow-outline';
      case '50d':
      case '50n':
        return 'water-outline';
      default:
        return 'cloud-outline';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city or zip code"
        value={location}
        onChangeText={setLocation}
        placeholderTextColor="#888"
      />
      <Button title="Search" onPress={handleSearch} color="#007AFF" />

      {weather && (
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>Weather in {weather.name}</Text>
          <Icon
            name={getWeatherIcon(weather.weather[0].icon)}
            size={50}
            color="#007AFF"
            style={styles.icon}
          />
          <Text style={styles.weatherText}>
            Temperature: {weather.main.temp}°C
          </Text>
          <Text style={styles.weatherText}>
            Condition: {weather.weather[0].description}
          </Text>
          <Text style={styles.weatherText}>
            Humidity: {weather.main.humidity}%
          </Text>
          <Text style={styles.weatherText}>
            Wind Speed: {weather.wind.speed} m/s
          </Text>
        </View>
      )}

      <Text style={styles.historyTitle}>Search History</Text>
      <FlatList
        data={history}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => setLocation(item)}>
            <Text style={styles.historyItem}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#007AFF',
  },
  input: {
    height: 40,
    borderColor: '#007AFF',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
    color: '#333',
  },
  weatherContainer: {
    marginVertical: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  weatherText: {
    fontSize: 18,
    marginBottom: 8,
    color: '#333',
  },
  icon: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#007AFF',
  },
  historyItem: {
    fontSize: 16,
    paddingVertical: 8,
    color: '#007AFF',
  },
});

export default Home;
