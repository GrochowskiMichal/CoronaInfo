import React, { Component } from "react";
import {
  ScrollView,
  View
} from "react-native";

import { Button, Block, Text } from "../../components";
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
      <View /*style={{ flex: 1,alignItems: "center" }}*/>
        <Block flex={false} row center space="between" /*style={styles.header}*/>
          <Text h2 bold center>{"Znajdujesz się w oknie algorytmu szybkiego reagowania"}</Text>
        </Block>
        
        <Block flex={false} row center space="between" middle padding={[theme.sizes.base / 0.8, 106]} /*style={styles.header}*/>
          <Text h2 light>Jak dbać o bliskich?</Text>
          </Block>
        <ScrollView style={{ marginVertical: theme.sizes.padding }}>
            <Block middle padding={[theme.sizes.base / 10, 10]}>
            <Button
              gradient
              onPress={() => navigation.navigate('kwarantanna')}
            >
              <Text h4 center white>
              Dbanie o bliskich w przypadku, gdy ktoś jest zarażony
              </Text>
            </Button>
            <Button
              gradient
              onPress={() => navigation.navigate('podejrzenie')}
            >
              <Text h4 center white>
              Dbanie o bliskich w przypadku, gdy ktoś podejrzewa chorobę
              </Text>
            </Button>
            <Button
              gradient
              onPress={() => navigation.navigate('zachowaj')}
            >
              <Text h4 center white>
              Dbanie o bliskich w przypadku, gdy nikt nie jest zarażony lub nikt nie wykazuje objawów choroby
              </Text>
            </Button>
          </Block>
          </ScrollView>
      </View>
    );
  }
}
