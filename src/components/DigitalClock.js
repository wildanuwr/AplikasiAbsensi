import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DigitalClock = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const day = now.toLocaleString('id-ID', { weekday: 'long' });
      const dayNumber = now.getDate().toString().padStart(2, '0');
      const month = now.toLocaleString('id-ID', { month: 'long' });
      const year = now.getFullYear();

      setTime(`${hours}:${minutes}:${seconds}`);
      setDate(`${day}, ${dayNumber} ${month} ${year}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{date}</Text>
      <Text style={styles.timeText}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  dateText: {
    marginTop:50,
    fontSize: 20,
    color: '#333',
  },
  timeText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default DigitalClock;
