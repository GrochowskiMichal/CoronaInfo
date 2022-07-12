import React, { Component } from "react";
import {
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking
} from "react-native";
import * as Icon from "@expo/vector-icons";

import { Button, Divider, Input, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const { width, height } = Dimensions.get("window");

class Product extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Button onPress={() => {}}>
          <Icon.Entypo name="dots-three-horizontal" color={theme.colors.gray} />
        </Button>
      )
    };
  };

  renderGallery() {
    const { product } = this.props;
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        data={product.images}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => (
          <Image
            source={item}
            resizeMode="contain"
            style={{ width, height: height / 2.2 }}
          />
        )}
      />
    );
  }

  render() {
    const { product } = this.props;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {this.renderGallery()}

        <Block style={styles.product}>
          <Text h2 bold>
            {product.name}
          </Text>
          <Block flex={false} row margin={[theme.sizes.base, 0]}>
            {product.tags.map(tag => (
              <Text key={`tag-${tag}`} caption gray style={styles.tag}>
                {tag}
              </Text>
            ))}
          </Block>
          <Text gray light height={25}>
          {'\n'}{'\n'}
          1. Wytnij 2 prostokąty według rysunku</Text>
          <Image source={require('../assets/images/tutorial1.jpg')} />
          <Text gray light height={25}>
          {'\n'}{'\n'}
          2. Do jednej tkaniny przypnij szpilkami gumki, postępuj według rysunku</Text>
          <Image source={require('../assets/images/tutorial2.jpg')} />
          <Text gray light height={25}>
          {'\n'}{'\n'}
          3.Przyłóż drugi kawałek tkaniny i zszyj wszystkie elementy ze sobą. Zostaw otwór, przez który będziemy mogli odwrócić maseczkę.</Text>
          <Image source={require('../assets/images/tutorial4.jpg')} />
          <Text gray light height={25}>
          {'\n'}{'\n'}
          4. Wywiń maseczkę na drugą stronę.</Text>
          <Image source={require('../assets/images/tutorial5.jpg')} />
          <Text gray light height={25}>
          {'\n'}{'\n'}
          5.  Przygotuj zaszewki z jednej strony.</Text>
          <Image source={require('../assets/images/tutorial6.jpg')} />
          <Text gray light height={25}>
          {'\n'}{'\n'}
          6. Przygotuj zaszewki z jednej strony</Text>
          <Image source={require('../assets/images/tutorial7.jpg')} />
          <Text gray light height={25}>
          {'\n'}{'\n'}
          7. Zszyj wszystkie zaszewki. To szycie zamknie pozostawiony otwór</Text>
          <Image source={require('../assets/images/tutorial8.jpg')} />
          <Text gray light height={25}>
          {'\n'}{'\n'}
          8. Tak wygląda gotowa maseczka.</Text>
          <Image source={require('../assets/images/tutorial9.jpg')} />
          <Text gray light height={25}>
          {'\n'}{'\n'}
          9.  Opcjonalnie można zrobić zaszywkę by wsunąć w nią drucik. Maseczka będzie wtedy bardziej dopasowana do twarzy.</Text>
          <Image source={require('../assets/images/tutorial10.jpg')} />
          <Text gray light height={25}>
          {'\n'}{'\n'}
          10.  Tak wygląda całkowicie gotowa maseczka.</Text>
          <Image source={require('../assets/images/tutorial9.jpg')} />

          <Divider margin={[theme.sizes.padding * 1.9, 0]} />

         
        </Block>
      </ScrollView>
    );
  }
}

Product.defaultProps = {
  product: mocks.products[1]
};

export default Product;

const styles = StyleSheet.create({
  product: {
    paddingHorizontal: theme.sizes.base * 1,
    paddingVertical: theme.sizes.padding
  },
  tag: {
    borderColor: "rgb(63, 71, 204)",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: theme.sizes.base,
    paddingHorizontal: theme.sizes.base,
    paddingVertical: theme.sizes.base / 2.0,
    marginRight: theme.sizes.base * 0.525
  },
  image: {
    width: width / 3.26,
    height: width / 3.26,
    marginRight: theme.sizes.base
  },
  more: {
    width: 55,
    height: 55
  },
});
