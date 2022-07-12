import React, { Component } from 'react';
import { View, Button } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default class HelloWorldApp extends Component {
  render() {
    const { navigation } = this.props;
    navigation.setOptions({
      headerRight: () => (
        <Icon.Button
          name="home"
          size={26}
          backgroundColor="transparent"
          color="white"
          onPress={() => navigation.navigate('browse')}
        />
      ),
    });
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
        title="Go to the new screen!"
        onPress={() => navigation.navigate('newscreen')}
        
      />
      </View>
    );
  }
}