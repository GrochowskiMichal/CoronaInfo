import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text, Block } from "../../components";
import { theme } from "../../constants";

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
      <View style={{justifyContent: "center" }}>

        <Image source={require('../../assets/images/8.png')} style={{width: 400, height: 620}} />
        <Block padding={[0, theme.sizes.base * 2]} style={{marginTop: -180}}></Block>
        <Text h2 light center>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur lorem commodo felis aliquet feugiat. Nulla vel egestas ante.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur lorem commodo felis aliquet feugiat. Nulla vel egestas ante. Proin volutpat velit ac pulvinar lobortis.
        </Text>
      </View>
    );
  }
}
