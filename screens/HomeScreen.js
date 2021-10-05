import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

const image = { uri: 'https://picsum.photos/1000/2000' };

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-1`}>
        <ImageBackground resizeMode="cover" style={{ width: '100%', height: '100%' }} source={image}>
          <Text style={styles.text}>Home Screen</Text>
          <NavOptions />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: 'blue',
    padding: 10,
    fontSize: 35,
    textAlign: 'center',
  },
});
