import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  TouchableOpacity
} from "react-native";

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconFontAwesone from 'react-native-vector-icons/FontAwesome5';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Block } from "../components";
import Menu from '../components/Menu';
import { tabsArray } from '../constants/tabs';
import { theme } from "../constants";

const { width, height } = Dimensions.get("window");
const Tab = createMaterialTopTabNavigator();

class Browse extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      show: false,
      menuStyle: "",
      SlideInUp: new Animated.Value(0),
    }
  }

  

  _toggleMenu = () => {
    if(this.state.show) { 
      Animated.parallel([
        Animated.timing(this.state.SlideInUp, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true
        })
      ]).start(() => {
        this.setState({show: false})
    });
      
    } else {
      Animated.parallel([
        Animated.timing(this.state.SlideInUp, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true
        })
      ]).start();
      this.setState({show: true})
    } 
  };

  
  render() {
	  const { navigation } = this.props;
    
    const nav = navigation;
    const menu = <Menu navigation={nav}/>;

    nav.setOptions({
      headerLeft: () => (
        <Icon.Button
          name="menu"
          size={22}
          backgroundColor="transparent"
          color="white"
          onPress={() => this._toggleMenu()}
          style={{marginLeft: 10}}
        />
      ),
      headerRight: () => (
        <IconFontAwesone.Button
          name="exclamation-triangle"
          size={26}
          backgroundColor="transparent"
          color="white"
          onPress={() => nav.navigate('startscreen')}
        />
      ),
    });

    return (

      <Block>
        
        <Tab.Navigator
        tabBarOptions={{
          labelStyle: theme.tabMenu.style.label ,
          indicatorStyle: theme.tabMenu.style.indicator,
          style: theme.tabMenu.style.bar,
          tabStyle: theme.tabMenu.style.tab,
          activeTintColor: theme.tabMenu.activeFontColor,
          inactiveTintColor: theme.tabMenu.inactiveFontColor,
          scrollEnabled: true,
        }}>
          {tabsArray.map(tab => (
            <Tab.Screen name={tab.name} component={tab.data} />
          ))}

        </Tab.Navigator>
        

            <Animated.View
            style={{position: 'absolute',opacity: this.state.SlideInUp, top: 0, left: this.state.show?0:-width, width: width, height: height, backgroundColor: "rgba(0,0,0,0.3)"}}
            ><TouchableOpacity style={{ widht: width, height: height}} onPress={() => this._toggleMenu()}></TouchableOpacity></Animated.View>
          <Animated.View
            style={{
              position: 'absolute',
              transform: [{
                translateX: this.state.SlideInUp.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-width/1.5, 0]
                })
              }]
            }}
          >
            
            {menu}
          
          
            
          </Animated.View>
          
        
        
      </Block>
    );
  }
}

export default Browse;