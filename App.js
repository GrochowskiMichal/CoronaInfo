import React from "react";

import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import Navigation from "./navigation";

//wyłączenie ostrzeżeń
console.disableYellowBox = true;

// import all used images
const images = [
  require("./assets/logo1.png"),
  require("./assets/logo1.png"),
  require("./assets/coronainfo.png"),
  require("./assets/coronainfo2.png"),
  require("./assets/images/explore_1.jpg"),
  require("./assets/images/mapa-polski/t00.png"),
  require("./assets/images/mapa-polski/t02.png"),
  require("./assets/images/mapa-polski/t04.png"),
  require("./assets/images/mapa-polski/t06.png"),
  require("./assets/images/mapa-polski/t08.png"),
  require("./assets/images/mapa-polski/t10.png"),
  require("./assets/images/mapa-polski/t12.png"),
  require("./assets/images/mapa-polski/t14.png"),
  require("./assets/images/mapa-polski/t16.png"),
  require("./assets/images/mapa-polski/t18.png"),
  require("./assets/images/mapa-polski/t20.png"),
  require("./assets/images/mapa-polski/t22.png"),
  require("./assets/images/mapa-polski/t24.png"),
  require("./assets/images/mapa-polski/t26.png"),
  require("./assets/images/mapa-polski/t28.png"),
  require("./assets/images/mapa-polski/t30.png"),
  require("./assets/images/mapa-polski/t32.png")
];


export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    isLoading: true,
  };


  

  handleResourcesAsync = async () => {
    // we're caching all the images
    // for better performance on the app

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });


    return Promise.all(cacheImages);
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      );
    }

    

    return (
      <Navigation	/>
    );
  }
}
