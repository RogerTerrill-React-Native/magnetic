import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  componentWillMount() {
    console.log('component will mount in albumlist');
  }
  render() {
    return (
      <View>
        <Text>Album List!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
