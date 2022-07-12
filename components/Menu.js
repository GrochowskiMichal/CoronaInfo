import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


import { theme } from "../constants";



export default function Menu() {

  const navigation = useNavigation();

  return (
    <View>
      <ScrollView style={theme.menu.styles.container}>
        <Text style={theme.menu.styles.title}>Menu</Text>
        <TouchableOpacity onPress={() => navigation.navigate('browse')} style={theme.menu.styles.button}>
					<Text center style={theme.menu.styles.buttonText}> 
					  Strona główna
					</Text>
				</TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('explore')} style={theme.menu.styles.button}>
					<Text center style={theme.menu.styles.buttonText}> 
					  Strefa artykułów
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('')} style={theme.menu.styles.button}>
					<Text center style={theme.menu.styles.buttonText}> 
					O twórcach
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('contact')} style={theme.menu.styles.button}>
					<Text center style={theme.menu.styles.buttonText}> 
					  Kontakt
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('linki')} style={theme.menu.styles.button}>
					<Text center style={theme.menu.styles.buttonText}> 
					  Przydatne linki
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('welcome')} style={theme.menu.styles.button}>
					<Text center style={theme.menu.styles.buttonText}> 
					  Wyjście
					</Text>
				</TouchableOpacity>
				<Image 
				style={{
					flex: 1,
					alignSelf: 'center',
					width: 230,
					height:130
				  }}
				source={require('../assets/Euphoria3.png')}/>
      </ScrollView>
    </View>

  );
}
