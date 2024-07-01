import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Weather App</Text>
      <Image
        source={{uri: 'https://example.com/logo.png'}}
        style={styles.logo}
      />
      <Text style={styles.description}>
        Aplikasi Cuaca adalah aplikasi sederhana dan intuitif yang menyediakan
        informasi cuaca terkini untuk lokasi mana pun. Aplikasi ini dikembangkan untuk
        membantu Anda tetap mendapatkan informasi terkini tentang kondisi cuaca terkini dan merencanakan perjalanan Anda
        kegiatan yang sesuai.
      </Text>
      <Text style={styles.subtitle}>Fitur:</Text>
      <View style={styles.featureContainer}>
        <Icon name="sunny-outline" size={24} color="#007AFF" style={styles.icon} />
        <Text style={styles.feature}>Kondisi cuaca saat ini</Text>
      </View>
      <View style={styles.featureContainer}>
        <Icon name="thermometer-outline" size={24} color="#007AFF" style={styles.icon} />
        <Text style={styles.feature}>Suhu, kelembaban, dan kecepatan angin</Text>
      </View>
      <View style={styles.featureContainer}>
        <Icon name="time-outline" size={24} color="#007AFF" style={styles.icon} />
        <Text style={styles.feature}>Sejarah pencarian</Text>
      </View>
      <View style={styles.featureContainer}>
        <Icon name="options-outline" size={24} color="#007AFF" style={styles.icon} />
        <Text style={styles.feature}>Dukungan untuk banyak unit (Celsius/Fahrenheit)</Text>
      </View>

      <Text style={styles.subtitle}>Pengembang:</Text>
      <View style={styles.featureContainer}>
        <Icon name="person-outline" size={24} color="#007AFF" style={styles.icon} />
        <Text style={styles.developer}>Moh. Qoidul Ghurri</Text>
      </View>

      <Text style={styles.subtitle}>Sumber Daya:</Text>
      <View style={styles.featureContainer}>
        <Icon name="cloud-outline" size={24} color="#007AFF" style={styles.icon} />
        <Text style={styles.resource}>OpenWeatherMap API</Text>
      </View>
      <View style={styles.featureContainer}>
        <Icon name="logo-react" size={24} color="#007AFF" style={styles.icon} />
        <Text style={styles.resource}>React Native</Text>
      </View>
      <View style={styles.featureContainer}>
        <Icon name="star-outline" size={24} color="#007AFF" style={styles.icon} />
        <Text style={styles.resource}>Ionicons</Text>
      </View>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#007AFF',
  },
  featureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  feature: {
    fontSize: 16,
    marginLeft: 8,
    color: '#333',
  },
  icon: {
    marginRight: 8,
  },
  developer: {
    fontSize: 16,
    marginLeft: 8,
    color: '#333',
  },
  resource: {
    fontSize: 16,
    marginLeft: 8,
    color: '#333',
  },
});
