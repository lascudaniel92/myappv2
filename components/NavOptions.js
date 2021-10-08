import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const data = [
  {
    id: '1',
    author: 'Alejandro Escamilla',
    width: 5616,
    height: 3744,
    url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
    download_url: 'https://picsum.photos/id/0/5616/3744',
    title: 'xxx',
  },
  {
    id: '2',
    author: 'Alejandro Escamilla',
    width: 5616,
    height: 3744,
    url: 'https://unsplash.com/photos/LNRyGwIJr5c',
    download_url: 'https://picsum.photos/id/1/5616/3744',
    title: 'Second one',
  },
  {
    id: '3',
    author: 'Paul Jarvis',
    width: 2500,
    height: 1667,
    url: 'https://unsplash.com/photos/6J--NXulQCs',
    download_url: 'https://picsum.photos/id/10/2500/1667',
    title: 'v25jihv5 2ljv652;hov 62v62 ;h4v26 ;4h,v6 4;h6v 4',
  },

  {
    id: '4',
    author: 'Tina Rataj',
    width: 2500,
    height: 1656,
    url: 'https://unsplash.com/photos/pwaaqfoMibI',
    download_url: 'https://picsum.photos/id/100/2500/1656',
    title: 'v25jihv5 2ljv652;hov 62v62 ;h4v26 ;4h,v6 4;h6v 4',
  },
  {
    id: '5',
    author: 'Lukas Budimaier',
    width: 5626,
    height: 3635,
    url: 'https://unsplash.com/photos/6cY-FvMlmkQ',
    download_url: 'https://picsum.photos/id/1000/5626/3635',
    title: 'Fifth one',
  },
  {
    id: '6',
    author: 'Danielle MacInnes',
    width: 5616,
    height: 3744,
    url: 'https://unsplash.com/photos/1DkWWN1dr-s',
    download_url: 'https://picsum.photos/id/1001/5616/3744',
    title: 'Sixth one',
  },
  {
    id: '7',
    author: 'NASA',
    width: 4312,
    height: 2868,
    url: 'https://unsplash.com/photos/6-jTZysYY_U',
    download_url: 'https://picsum.photos/id/1002/4312/2868',
    title: 'Seventh one',
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      columnWrapperStyle={{ flex: 1, justifyContent: 'center' }}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={{}}>
          <View style={styles.fullview}>
            <Image style={styles.image} source={{ uri: item.download_url }} />
            <Text numberOfLines={1} style={styles.author}>
              {item.author}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  fullview: {
    borderColor: 'rgba(1, 1, 1, 0.7)',
    borderWidth: 3,
    margin: 3,
    padding: 5,
    backgroundColor: 'rgba(155, 155, 155, 0.5)',
  },
  author: {
    width: 165,
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    alignSelf: 'center',
    padding: 2,
    margin: 5,
    fontWeight: '700',
  },
  image: { width: 168, height: 168, margin: 3, padding: 1 },
});

export default NavOptions;
