import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';

const data = [
  {
    id: '0',
    author: 'Alejandro Escamilla',
    width: 5616,
    height: 3744,
    url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
    download_url: 'https://picsum.photos/id/0/5616/3744',
    title: 'First one',
  },
  {
    id: '1',
    author: 'Alejandro Escamilla',
    width: 5616,
    height: 3744,
    url: 'https://unsplash.com/photos/LNRyGwIJr5c',
    download_url: 'https://picsum.photos/id/1/5616/3744',
    title: 'Second one',
  },
  {
    id: '10',
    author: 'Paul Jarvis',
    width: 2500,
    height: 1667,
    url: 'https://unsplash.com/photos/6J--NXulQCs',
    download_url: 'https://picsum.photos/id/10/2500/1667',
    title: 'Third one',
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
