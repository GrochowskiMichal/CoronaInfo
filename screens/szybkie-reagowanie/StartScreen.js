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
      <ScrollView style={{ marginVertical: theme.sizes.padding }}>
      <View /*style={{ flex: 1,alignItems: "center" }}*/>
        <Block flex={false} row center space="between" /*style={styles.header}*/>
          <Text h2 bold center>{"Znajdujesz się w oknie algorytmu szybkiego reagowania"}</Text>
        </Block>
        
        <Block flex={false} row center space="between" middle padding={[theme.sizes.base / 0.8, 62]} /*style={styles.header}*/>
          <Text h2 light>Wybierz interesującą cię treść:</Text>
          </Block>
        
            <Block middle padding={[theme.sizes.base / 10, 10]}>
            <Button
              gradient
              onPress={() => navigation.navigate('zarazony')}
            >
              <Text h4 center white>
                Czy podejrzewasz że jesteś zarażony?
              </Text>
            </Button>
            <Button
              gradient
              onPress={() => navigation.navigate('bliscy')}
            >
              <Text h4 center white>
                Jak dbać o bliskich?
              </Text>
            </Button>
            <Button
              gradient
              onPress={() => navigation.navigate('ochrona')}
            >
              <Text h4 center white>
               Jak dokładnie dbać o zasady ochrony?
              </Text>
            </Button>
            <Button
              gradient
              onPress={() => navigation.navigate('')}
            >
              <Text h4 center white>
              Gdzie znajdę aktualne informacje dotyczące liczby chorych w Polsce?
              </Text>
            </Button>
            <Button
              gradient
              onPress={() => navigation.navigate('')}
            >
              <Text h4 center white>
              Czy antybiotyki są skuteczne w zapobieganiu nowemu koronawirusowi i w jego leczeniu?
              </Text>
            </Button>
            <Button
              gradient
              onPress={() => navigation.navigate('')}
            >
              <Text h4 center white>
              Czy zarażona kobieta w ciąży może przekazać wirusa nienarodzonemu dziecku lub podczas porodu?
              </Text>
            </Button>
            <Button
              gradient
              onPress={() => navigation.navigate('')}
            >
              <Text h4 center white>
              Czy w ciągu 14 dni rozwoju wirusa pacjent już zaraża?
              </Text>
            </Button>
            <Button
              gradient
              onPress={() => navigation.navigate('')}
            >
              <Text h4 center white>
              Ile się czeka na wyniki testu na koronawirusa?
              </Text>
            </Button>
            <Button
              gradient
              onPress={() => navigation.navigate('')}
            >
              <Text h4 center white>
              Czy osoby wyleczone mogą zarażać?
              </Text>
            </Button>
            <Button
              gradient
              onPress={() => navigation.navigate('')}
            >
              <Text h4 center white>
             Fałszywe informacje i mity
              </Text>
            </Button>
          </Block>
         
      </View>
      </ScrollView>
    );
  }
}
