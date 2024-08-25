import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

const Kamera = forwardRef((props, ref) => {
  const cameraRef = useRef(null);

  // Ekspose metode untuk mengambil foto ke komponen luar
  useImperativeHandle(ref, () => ({
    takePicture: async () => {
      if (cameraRef.current) {
        try {
          const options = { quality: 0.5, base64: true };
          const data = await cameraRef.current.takePictureAsync(options);
          props.onCapture(data.uri); // Kirimkan URI foto ke props callback
        } catch (err) {
          console.log('Error: ', err);
        }
      }
    },
  }));

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.front}
        captureAudio={false}
      >
        {({ status }) => {
          if (status !== 'READY') return <Text>Loading...</Text>;
          return null; // Tidak perlu tombol snap
        }}
      </RNCamera>
    </View>
  );
});

export default Kamera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems:'center',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
});
