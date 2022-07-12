import * as React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class SomethingWrong extends React.Component {
  render() {
    return (
      <View>
        {this.props.loading ? (
          <View style={styles.horizontal}>
            <ActivityIndicator size="large" color="#000" />
          </View>
        ) : (
          <View>
            {this.props.meetings.length === 0 ? (
              <View style={styles.nothingFoundException}>
                <MCIcon
                  style={{alignSelf: 'center'}}
                  name="briefcase-check"
                  size={50}
                  color="#d86221"
                />
                <View>
                  <Text style={{fontSize: 25, color: '#757575', marginTop: 10}}>
                    Somethign went wrong!
                  </Text>
                </View>
              </View>
            ) : (
              <Text style={{display: 'none'}} />
            )}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  nothingFoundException: {
    alignSelf: 'center',
    marginTop: 250,
  },
});
