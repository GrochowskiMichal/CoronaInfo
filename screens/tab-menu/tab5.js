import * as React from 'react';
import {FlatList, Text, ScrollView, View} from 'react-native';
import Header from '../../components/Header';
import CountryCard from '../../components/CountryCard';
import SomethingWrong from '../../components/SomethingWrong';

export default class Dashboard extends React.Component {
  constructor() {
    super();
    global.localData = [];
    this.state = {
      data: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch('https://corona.lmao.ninja/v3/covid-19/countries')
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        this.setState({
          data: responseJson,
          loading: false,
        });
      });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <SomethingWrong
          loading={this.state.loading}
          meetings={this.state.data}
        />
        <FlatList
          removeClippedSubviews={true}
          keyExtractor={item => item.country}
          data={this.state.data}
          renderItem={({item}) => <CountryCard data={item} />}
        />
      </View>
    );
  }
}
