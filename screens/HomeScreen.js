import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight;

const image = { uri: 'https://picsum.photos/1000/2005' };

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ marginTop: statusBarHeight }}>
      <View style={{}}>
        <ImageBackground resizeMode="cover" style={styles.imgbg} source={image}>
          <Text style={styles.titleapp}>Home Screen</Text>
          <NavOptions />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleapp: { fontSize: 40, color: 'yellow', textAlign: 'center', backgroundColor: 'rgba(1, 1, 1, 0.7)' },
  imgbg: { width: '100%', height: '100%' },
});

export default HomeScreen;
