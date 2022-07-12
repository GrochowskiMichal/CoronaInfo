import * as React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Appbar} from 'react-native-paper';

export default class Header extends React.Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <Appbar.Header style={styles.headerColor}>
          <Appbar.Content
            style={styles.header}
            title="Dane odnośnie covid-19 na świecie"
            subtitle=""
          />
        </Appbar.Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginLeft: 20,
    color: 'red',
  },
  headerColor: {
    backgroundColor: 'white',
  },
});
