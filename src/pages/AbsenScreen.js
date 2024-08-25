import React, { useState, useRef } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Snackbar } from 'react-native-paper';
import Kamera from '../components/Kamera';
import Maps from '../components/Maps';

const AbsenScreen = () => {
  const [photoUri, setPhotoUri] = useState(null);
  const [location, setLocation] = useState(null);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const kameraRef = useRef(null);

  const handlePhotoCapture = (uri) => {
    setPhotoUri(uri);
  };

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarVisible(true);
  };

  const handleSubmit = async () => {
    // Jika belum ada foto atau lokasi, ambil foto terlebih dahulu
    if (!photoUri || !location) {
      kameraRef.current.takePicture(); // Ambil foto
      showSnackbar('Ambil foto dan lokasi terlebih dahulu.');
      return;
    }

    try {
      // Kirim data foto dan lokasi ke database
      await sendDataToDatabase(photoUri, location);
      showSnackbar('Absen berhasil.');
    } catch (error) {
      showSnackbar('Gagal mengirim data.');
    }
  };

  const sendDataToDatabase = async (photoUri, location) => {
    // Implementasikan logika untuk mengirim foto dan lokasi ke database
    console.log('Sending data to database:', { photoUri, location });
    // Contoh implementasi menggunakan fetch
    // await fetch('YOUR_DATABASE_API_ENDPOINT', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ photoUri, location }),
    // });
  };

  return (
    <View style={styles.container}>
      <Kamera style={styles.kamera} ref={kameraRef} onCapture={handlePhotoCapture} />
      <Maps style={styles.maps} onLocationChange={handleLocationChange} />
      <Button title="Submit" onPress={handleSubmit} />
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        action={{
          label: 'OK',
          onPress: () => setSnackbarVisible(false),
        }}
        style={styles.snackbar}
      >
        {snackbarMessage}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  kamera: {
    width: '100%',
    height: '50%',
  },
  maps: {
    width: '100%',
    height: '30%',
  },
  snackbar: {
    backgroundColor: '#333',
  },
});

export default AbsenScreen;
