import React, { useState } from "react";
import {View} from "react-native";
import NativeForms from "native-forms";
import { Button, Block, Text } from "../components";
import { theme } from "../constants";
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const [hasForm, showForm] = useState(false);
  const show = () => showForm(true);
  const hide = () => showForm(false);
  const navigation = useNavigation();
  return (
    <View /*style={{ flex: 1,alignItems: "center" }}*/>
    
        <NativeForms
          form="https://my.nativeforms.com/N92MP1jZmcUTwcHSk1Db"
          onClose={hide}
/>
    
  </View>
  );
};


export default App;