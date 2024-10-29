// import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  Dimensions,
} from 'react-native';
import {Images} from '../assets';
const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const Splash = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(async () => {
      navigation.replace('Home');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* <Image
        resizeMode="cover"
        source={Images.splash}
        style={styles.splashimage}
      /> */}
      <Image
        resizeMode="cover"
        source={Images.splash_alterate}
        style={styles.splashalterate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    color: '#98c6e3',
    marginBottom: 20,
  },
  splashimage: {
    resizeMode: 'cover',
    height: '110%',
    width: '110%',
  },
  splashalterate: {
    height : 200,
    width  : 200,
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.35,
    left: SCREEN_WIDTH * 0.25,
  },
  indicator: {position: 'absolute'},
});

export default Splash;
