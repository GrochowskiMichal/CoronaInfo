import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text, Block, Button } from "../../components";
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

        <Image source={require('../../assets/images/1.png')} style={{width: 400, height: 320}} />
        <Block padding={[0, theme.sizes.base * 2]} style={{marginTop: 80}}></Block>
        <Text h2 light center>W takiej sytuacji należy natychmiastowo zadzwonić na numer infolinii Narodowego Funduszu Zdrowia dotyczącej postępowania w sytuacji podejrzenia zakażenia koronawirusem *800 190 590*. Można także skontaktować się za pomocą numeru 112, gdzie powinieneś zostać przekierowany do odpowiednich służb.
        </Text>
        <Block middle padding={[theme.sizes.base / 0.3, 10]}>
        <Button
              gradient
              onPress={() => navigation.navigate('zarazony')}
            >
              <Text h4 center white>
                Zobacz cały artykuł na ten temat!
              </Text>
            </Button>
            </Block>
      </View>
    );
  }
}
