import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity, Dimensions, Linking } from 'react-native';
import React from 'react';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const handleLocationPress = () => {
    const url = 'https://www.google.com/maps/place/Mahalo+Coffee+%26+Pastry/@45.7912333,24.149668,739m/data=!3m1!1e3!4m15!1m8!3m7!1s0x474c678564010c83:0x19db3abd6f629733!2sStrada+Radu+Stanca+1,+Sibiu+557260!3b1!8m2!3d45.7911265!4d24.1507669!16s%2Fg%2F11g2yy5d43!3m5!1s0x474c67d20646e3ad:0x2647749f260e856a!8m2!3d45.7912332!4d24.1509686!16s%2Fg%2F11ld8hyffk?entry=ttu';
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/Background.png")} style={styles.background} />
      <View style={styles.locationContainer}>
        <TouchableOpacity style={styles.locationButton} onPress={handleLocationPress}>
          <Image source={require("../assets/Location.png")} style={styles.locationLogo} />
        </TouchableOpacity>
        <Text style={styles.location}>Radu Stanca nr 1, Sibiu, Romania 550170</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity> 
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity> 
          <Text>Sign-Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: height,
  },
  locationContainer: {
    padding: 35,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 580
  },
  locationButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  locationLogo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  location: {
    fontSize: 30,
    fontFamily: fonts.Cookie,
    textAlign: 'center',
    maxWidth: '80%',
    flexWrap: 'wrap',
    marginLeft: 15, // Add some margin to separate from the logo
  },
  buttonContainer:{
    flexDirection: 'row',
    bottom: 30,
    justifyContent:'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.brown,
    width: '100%',
  }
});