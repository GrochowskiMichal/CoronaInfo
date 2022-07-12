import React from 'react'

import { Text } from "../../components";
import { useNavigation } from '@react-navigation/native';

export default function TextTab4() {

  const navigation = useNavigation();

  return (
    <Text>
        <Text h1 underline>Próba</Text> <Text bold h3>tworzenia</Text> <Text italic h3>zakładek</Text>
    </Text>
  );
}
