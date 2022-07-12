import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Modal,
  StyleSheet,
  ScrollView
} from "react-native";

import { Button, Block, Text } from "../components";
import { theme } from "../constants";

const { width, height } = Dimensions.get("window");

class Welcome extends Component {
  static navigationOptions = {
    header: null
  };

  scrollX = new Animated.Value(0);

  state = {
    showTerms: false
  };

  goBrowse() {
    this.props.navigation.replace('browse');
    this.props.navigation.navigate('browse');
  }

  renderTermsService() {
    return (
      <Modal
        animationType="slide"
        visible={this.state.showTerms}
        onRequestClose={() => this.setState({ showTerms: false })}
      >
        <Block
          padding={[theme.sizes.padding * 2, theme.sizes.padding]}
          space="between"
        >
          <Text h2 light>
            Warunki użytkowania
          </Text>

          <ScrollView style={{ marginVertical: theme.sizes.padding }}>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              1. Lorem ipsum.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              2. Lorem ipsum dolor sit amet,Morbi in ipsum congue, malesuada justo vitae, tincidunt nunc.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis odio lorem, quis.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in ipsum congue, malesuada justo vitae, tincidunt nunc.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis odio lorem, quis semper sem facilisis a. Ut ut molestie sem. Praesent quis ante id nisl rhoncus sollicitudin nec nec orci. Maecenas quam mauris, pellentesque sit amet malesuada et, dictum ac neque. Nam at lorem feugiat sem laoreet elementum vitae vulputate ipsum. Cras orci neque, accumsan in ultrices eu, feugiat id massa. Sed sodales purus quis leo scelerisque maximus. In mattis erat ac diam euismod vehicula. Nunc elementum feugiat nibh sed consectetur. Morbi scelerisque lorem nibh, vitae ultricies diam aliquam sit amet. Donec sed gravida dui, vitae fermentum arcu. Fusce sed elementum enim. Mauris id est suscipit, congue nulla elementum, congue odio. Morbi in ipsum congue, malesuada justo vitae, tincidunt nunc.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              7. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed elementum enim. Mauris id est suscipit, congue nulla elementum, congue odio. Morbi in ipsum congue, malesuada justo vitae, tincidunt nunc.
             
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              8. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              uada justo vitae, tincidunt nunc.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              9.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis odio lorem, tincidunt nunc.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              10. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis odio lorem.
            </Text>
          </ScrollView>

          <Block middle padding={[theme.sizes.base / 2, 0]}>
            <Button
              gradient
              onPress={() => this.setState({ showTerms: false })}
            >
              <Text center white>
                Zrozumiałem!
              </Text>
            </Button>
          </Block>
        </Block>
      </Modal>
    );
  }

  renderIllustrations() {
    const { illustrations } = this.props;

    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        extraDate={this.state}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => (
          <Image
            source={item.source}
            resizeMode="contain"
            style={{ width, height: height / 2, overflow: "visible" }}
          />
        )}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { x: this.scrollX } }
          }
        ])}
      />
    );
  }

  renderSteps() {
    const { illustrations } = this.props;
    const stepPosition = Animated.divide(this.scrollX, width);
    return (
      <Block row center middle style={styles.stepsContainer}>
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: "clamp"
          });

          return (
            <Block
              animated
              flex={false}
              key={`step-${index}`}
              color="gray"
              style={[styles.steps, { opacity }]}
            />
          );
        })}
      </Block>
    );
  }

  render() {
    const { navigation } = this.props;
    this.props.navigation.setOptions({ headerShown: false });
    return (
      <Block>
        <Block center bottom flex={0.45}>
          <Text h1 center bold>
            Corona
            <Text h1 primary>
              {"INFO"}
            </Text>
          </Text>
          <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 1.5 }}>
           Wszystkie informacje w pigułce.
          </Text>
          <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 10 }}>Bądź na bieżąco!</Text>
        </Block>
        <Block center middle>
          {this.renderIllustrations()}
          {this.renderSteps()}
        </Block>
        <Block middle flex={0.45} margin={[2, theme.sizes.padding * 1]}>
          <Button gradient onPress={() => this.goBrowse()}>
            <Text center semibold white>
              {/*Zaloguj się!*/} Rozpocznij
            </Text>
          </Button>
          {/*<Button shadow onPress={() => navigation.navigate("SignUp")}>
            <Text center semibold>
              Zarejestruj sie!
            </Text>
          </Button>*/}
          <Button onPress={() => this.setState({ showTerms: true })}>
            <Text center caption gray>
              Warunki użytkowania
            </Text>
          </Button>
        </Block>
      </Block>
    );
  }
}

Welcome.defaultProps = {
  illustrations: [
    { id: 1, source: require("../assets/coronainfo13.png") },
  ]
};

export default Welcome;

const styles = StyleSheet.create({
  stepsContainer: {
    position: "absolute",
    bottom: theme.sizes.base * 0,
    right: 0,
    left: 0
  },
  steps: {
    width: 0,
    height: 0,
    borderRadius: 0,
    marginHorizontal: 0
  }
});
