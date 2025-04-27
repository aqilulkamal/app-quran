import { Image, StyleSheet, Platform, View, SafeAreaView, Text, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from 'expo-router';

export default function HomeScreen() {

  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.judul}>Applikasi Qura'n</Text>
        <Text style={styles.oleh}>Oleh Aqil</Text>
      </View>

      <TouchableOpacity style={styles.tombol}>
        <Text style={styles.tombolTeks} onPress={() => navigation.navigate("surat")}>Mulai Baca Yuk</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%', 
    width: '100%'
  },

  header: {
    marginTop: '20%',
  },

  judul: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 24
  },

  oleh: {
    textAlign: 'center',
    marginTop: 10
  },

  tombol: {
    position: 'absolute',
    bottom: 20,
    left: '5%',
    width: '90%',
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 10,
  },

  tombolTeks: {
    color: 'white',
    textAlign: 'center'
  }
});
