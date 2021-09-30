import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={[tw`text-red-500 p-10`, styles.text]}>I am the boss screen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: 'blue',
  },
});
