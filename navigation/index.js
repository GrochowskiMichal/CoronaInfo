import * as React from 'react';
import { Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../constants';
import { screensArray } from '../constants/screens';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screensArray.map(screen => (

        <Stack.Screen 
        name={screen.id} 
        component={screen.data} 
        options={{
          headerTitleAlign: 'center',
          title: [<Text h1 center bold style={{color: theme.colors.black}}>Corona<Text primary style={{color: theme.colors.white}}>INFO</Text></Text>],
          headerStyle: theme.navigation.styles.header,
          headerTitleStyle: theme.navigation.styles.headerTitle
        }}
        />
      
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

