import React from 'react';
import { ScrollView, View, Image, ImageBackground, Dimensions, StyleSheet,Text } from 'react-native';
import DigitalClock from '../components/DigitalClock';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const getGreeting = () => {
  const now = new Date();
  const hours = now.getHours();

  if (hours >= 2 && hours < 12) {
    return 'Selamat Pagi';
  } else if (hours >= 12 && hours < 15) {
    return 'Selamat Siang';
  } else if (hours >= 15 && hours < 18) {
    return 'Selamat Sore';
  } else {
    return 'Selamat Malam';
  }
};


const HomeScreen = () => {
  const greeting = getGreeting();
  return (
    <ScrollView style={styles.scrol}>
      <View style={styles.page}>
        <ImageBackground
          source={require('../assets/image.png')}
          style={styles.header}
        >
          <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
          <Text style={styles.headerselamat} >{greeting}</Text>
          <Text style={styles.headernama}>Ahmad Wildanu Wahyu Ramadhan</Text>

        </ImageBackground>
      <View style={styles.overlay}>
      <View style={styles.row}>
      <View>
        <Icon style={styles.icon} name="location-arrow" size={30} color="#191970" />
        <Text style={styles.iconHead}>Lokasi</Text>
      </View>
      <View>
        <Icon style={styles.icon} name="envelope" size={30} color="#191970" />
        <Text style={styles.iconHead}>Izin</Text>
      </View>
      <View>
        <Icon style={styles.icon} name="history" size={30} color="#191970" />
        <Text style={styles.iconHead}>Histori</Text>
      </View>
      <View>
        <Icon style={styles.icon} name="sign-out-alt" size={30} color="#191970" />
        <Text style={styles.iconHead}>Keluar</Text>
      </View>
        </View>
      </View>
      <View style={styles.masuk}><Text style={styles.TextAbsen}>10:21:21</Text></View>
      <View style={styles.pulang}><Text style={styles.TextAbsen}>10:21:21</Text></View>
      <SafeAreaView style={{ flex: 1 }}>
      <DigitalClock />
    </SafeAreaView>
    <View style={styles.overlaybawah}>
    <View style={styles.row}>
    <View style={styles.count}><Icon style={styles.icon} name="check" size={20} color="#32cd32" /><Text style={styles.TextCount}>Hadir 0 Hari</Text></View>
    <View style={styles.count}><Icon style={styles.icon} name="envelope" size={20} color="#ffa500" /><Text style={styles.TextCount}>Izin 0 Hari</Text></View>
    </View>
    </View>
    </View>
    </ScrollView>
    
  );
};

export default HomeScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems :'center',
    backgroundColor : 'white',
  },
  scrol:{
    backgroundColor : 'white',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.25,
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20, 
    overflow: 'hidden', 
  },
  logo:{
    width : 35,
    height : 35,
    marginTop : 10,
    marginLeft :10,
  },
  headerselamat :{
    fontSize : 25,
    color :'#ffff',
    marginTop : 10,
    textAlign: 'center', 
  },
  headernama : {
    color : '#ffff',
    textAlign: 'center', 
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'white',
    width: '85%', 
    padding: 30, 
    borderRadius: 10, 
    alignItems: 'center',
    marginTop : -50,
    textAlign: 'center', 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  iconHead:{
    textAlign: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row', // Mengatur ikon dalam satu baris
    justifyContent: 'center', // Mengatur ikon agar berada di tengah
  },
  icon: {
    marginHorizontal: 25, // Jarak horizontal (kiri dan kanan)
  },
  count:{
    padding: 10,
    marginHorizontal: 45,
    alignItems: 'center',
    backgroundColor: 'royalblue',
    borderRadius: 10, 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  overlaybawah:{
    backgroundColor: 'white',
    width: '100%', 
    padding: 50, 
    borderRadius: 10, 
    alignItems: 'center',
    marginTop : 35,
    textAlign: 'center', 
  },
  TextAbsen :{
    fontWeight: 'bold',
  },
  TextCount :{
    fontWeight: 'bold',
    color:'white',
  },
  masuk: {
    backgroundColor: 'limegreen',
    width: '25%', 
    padding: 15, 
    borderRadius: 8, 
    alignItems: 'center',
    marginTop :10,
    marginBottom :10,
    marginLeft : '-60%',
    
  },
  pulang: {
    backgroundColor: 'crimson',
    alignItems: 'center',
    width: '25%', 
    padding: 15, 
    borderRadius: 8, 
    marginTop : -58,
    marginRight : '-60%',
  },
});
