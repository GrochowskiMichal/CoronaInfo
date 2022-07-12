import { Dimensions } from 'react-native';

import { theme } from "./";

//set style={{paddingHorizontal: theme.sizes.base * 2}} for container
const widthImg = Dimensions.get("window").width-theme.sizes.base * 4;
const heightImg = widthImg;

const defaultMap = require("../assets/images/mapa-polski/t00.png");

const mapsData = [
  {
    id: "t02",
    image: require("../assets/images/mapa-polski/t02.png"),
    data: "xyz",
    style : {
      left: widthImg*0.08,
      top: heightImg*0.55,
      width: widthImg*0.25,
      height: heightImg*0.16,
      backgroundColor: 'transparent',
      borderRadius: 100,
      position: 'absolute'
    }
  },
  {
    id: "t04",
    image: require("../assets/images/mapa-polski/t04.png"),
    data: "xyz",
    style : {
      left: widthImg*0.32,
      top: heightImg*0.21,
      width: widthImg*0.2,
      height: heightImg*0.2,
      borderRadius: 100,
      backgroundColor: 'transparent',
      position: 'absolute'
    }
  },
  {
    id: "t06",
    image: require("../assets/images/mapa-polski/t06.png"),
    data: "xyz",
    style : {
      left: widthImg*0.76,
      top: heightImg*0.45,
      width: widthImg*0.22,
      height: heightImg*0.31,
      borderRadius: 100,
      backgroundColor: 'transparent',
      position: 'absolute'
    }
  },
  {
    id: "t08",
    image: require("../assets/images/mapa-polski/t08.png"),
    data: "xyz",
    style : {
      left: widthImg*0.04,
      top: heightImg*0.3,
      width: widthImg*0.12,
      height: heightImg*0.27,
      borderRadius: 100,
      backgroundColor: 'transparent',
      position: 'absolute'
    }
  },
  {
    id: "t10",
    image: require("../assets/images/mapa-polski/t10.png"),
    data: "xyz",
    style : {
      left: widthImg*0.425,
      top: heightImg*0.45,
      width: widthImg*0.18,
      height: heightImg*0.21,
      borderRadius: 100,
      backgroundColor: 'transparent',
      position: 'absolute'
    }
  },
  {
    id: "t12",
    image: require("../assets/images/mapa-polski/t12.png"),
    data: "xyz",
    style : {
      left: widthImg*0.51,
      top: heightImg*0.75,
      width: widthImg*0.2,
      height: heightImg*0.19,
      borderRadius: 100,
      backgroundColor: 'transparent',
      position: 'absolute'
    }
  },
  {
    id: "t14",
    image: require("../assets/images/mapa-polski/t14.png"),
    data: "xyz",
    style : {
      left: widthImg*0.58,
      top: heightImg*0.25,
      width: widthImg*0.2,
      height: heightImg*0.38,
      borderRadius: 100,
      backgroundColor: 'transparent',
      position: 'absolute'
    }
  },
  {
    id: "t16",
    image: require("../assets/images/mapa-polski/t16.png"),
    data: "xyz",
    style : {
      borderRadius: 100,
      left: widthImg*0.28,
      top: heightImg*0.63,
      width: widthImg*0.15,
      height: heightImg*0.17,
      backgroundColor: 'transparent',
      position: 'absolute'
    }
  },
  {
    id: "t18",
    image: require("../assets/images/mapa-polski/t18.png"),
    data: "xyz",
    style : {
      borderRadius:100,
      left: widthImg*0.7,
      top: heightImg*0.72,
      width: widthImg*0.22,
      height: heightImg*0.23,
      backgroundColor: 'transparent',
      position: 'absolute'
    }
  },
  {
    id: "t20",
    image: require("../assets/images/mapa-polski/t20.png"),
    data: "xyz",
    style : {
      left: widthImg*0.78,
      top: heightImg*0.08,
      width: widthImg*0.16,
      borderRadius: 100,
      height: heightImg*0.34,
      backgroundColor: 'transparent',
      position: 'absolute'
    }
  },
  {
    id: "t22",
    image: require("../assets/images/mapa-polski/t22.png"),
    data: "xyz",
    style : {
      left: widthImg*0.26,
      top: heightImg*0.02,
      width: widthImg*0.25,
      borderRadius: 100,
      height: heightImg*0.19,
      backgroundColor: 'transparent',
      position: 'absolute'
    }
  }, 
  {
    id: "t24",
    image: require("../assets/images/mapa-polski/t24.png"),
    data: "xyz",
    style : {
      left: widthImg*0.415,
      top: heightImg*0.65,
      width: widthImg*0.12,
      height: heightImg*0.27,
      borderRadius: 100,
      backgroundColor: 'transparent',
      position: 'absolute'
    }
  },  
  {
    id: "t26",
    image: require("../assets/images/mapa-polski/t26.png"),
    data: "xyz",
    style : {
      left: widthImg*0.56,
      top: heightImg*0.62,
      width: widthImg*0.19,
      height: heightImg*0.16,
      borderRadius: 100,
      backgroundColor: 'transparent',
      position: 'absolute'
    }
  },
  {
    id: "t28",
    image: require("../assets/images/mapa-polski/t28.png"),
    data: "xyz",
    style : {
      left: widthImg*0.48,
      top: heightImg*0.07,
      width: widthImg*0.34,
      height: heightImg*0.18,
      borderRadius: 100,
      backgroundColor: 'transparent',
      position: 'absolute'
    }
  },
  {
    id: "t30",
    image: require("../assets/images/mapa-polski/t30.png"),
    data: "xyz",
    style : {
      left: widthImg*0.2,
      top: heightImg*0.3,
      width: widthImg*0.18,
      height: heightImg*0.25,
      borderRadius: 100,
      backgroundColor: 'transparent',
      position: 'absolute'
    }
  },
  {
    id: "t32",
    image: require("../assets/images/mapa-polski/t32.png"),
    data: "xyz",
    style : {
      left: widthImg*0.02,
      top: heightImg*0.08,
      width: widthImg*0.25,
      borderRadius: 100,
      height: heightImg*0.24,
      backgroundColor: 'transparent',
      position: 'absolute'
    }
  }
];


export {defaultMap, mapsData, widthImg, heightImg};