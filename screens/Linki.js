import React, { Component } from 'react';
import { View, Linking } from 'react-native';
import { Text, Block } from "../components";
import { theme } from "../constants";



import Icon from 'react-native-vector-icons/FontAwesome5';

export default class HelloWorldApp extends Component {
  render() {
    const { navigation } = this.props;
    navigation.setOptions({
      headerRight: () => (
        <Icon.Button
          name="home"
          size={26}
          backgroundColor="transparent"
          color="white"
          onPress={() => navigation.navigate('browse')}
        />
      ),
    });
    return (
      <View style={{justifyContent: "center" }}>
        <Block padding={[0, theme.sizes.base * 2]} style={{marginTop: 20}}></Block>

        <Text h2 light center>W tej zakładce znajdziesz wiele przydantych linków do stron z informacjami odnośnie COVID-19</Text>

        <Block padding={[0, theme.sizes.base * 2]} style={{marginTop: 20}}></Block>
        <Text>Strona Światowej Organizacji Zdrowia</Text>
        <Text style={{color: '#CD2B2D'}}onPress={() => Linking.openURL('https://www.who.int/')}>https://www.who.int/</Text>

        <Block padding={[0, theme.sizes.base * 2]} style={{marginTop: 20}}></Block>
        <Text>Strona Polskiego Minsterstwa Zdrowia </Text>
        <Text style={{color: '#CD2B2D'}}onPress={() => Linking.openURL('https://www.gov.pl/web/koronawirus')}>https://www.gov.pl/web/koronawirus</Text>

        <Block padding={[0, theme.sizes.base * 2]} style={{marginTop: 20}}></Block>
        <Text>Lista mailingowa z informacjami i statusem na temat covid-19 dla wybranego przez ciebie kraju</Text>
        <Text style={{color: '#CD2B2D'}}onPress={() => Linking.openURL('https://covid19dailydigest.com/')}>https://covid19dailydigest.com/</Text>

        <Block padding={[0, theme.sizes.base * 2]} style={{marginTop: 20}}></Block>
        <Text>Interaktynwa mapa ze statystykami odnośnie covid-19 dla całego świata stworzona przez Uniwersytet Johnsa Hopkinsa</Text>
        <Text style={{color: '#CD2B2D'}}onPress={() => Linking.openURL('https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html?fbclid=IwAR3YjnCNJtGpM4qNfJ3lpHzhjapjelArDO1q4x3L5uqQTzU9ipoeB2E5wOk#/bda7594740fd40299423467b48e9ecf6')}>https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html/</Text>

        <Block padding={[0, theme.sizes.base * 2]} style={{marginTop: 20}}></Block>
        <Text>Globalna lista przypadków i statystyk odnośnie covid-19</Text>
        <Text style={{color: '#CD2B2D'}}onPress={() => Linking.openURL('https://neomjs.github.io/pages/node_modules/neo.mjs/dist/production/apps/covid/index.html?fbclid=IwAR2Yo4J5sHMPVYFgr4U4WcN0MyXq14QDyeLfIESG0c515CxnX_Y85JqckdY#country=USA&mainview=table')}>https://neomjs.github.io/</Text>

        <Block padding={[0, theme.sizes.base * 2]} style={{marginTop: 20}}></Block>
        <Text>Prognoza dotycząca covid-19 w Polsce</Text>
        <Text style={{color: '#CD2B2D'}}onPress={() => Linking.openURL('https://docs.google.com/spreadsheets/d/1ZIdpVF5AfbkFvGxey92RQLjRVWF8_oWN5-hSbFDL8g0/edit#gid=254242832')}>https://docs.google.com/spreadsheets/</Text>

        <Block padding={[0, theme.sizes.base * 2]} style={{marginTop: 20}}></Block>
        <Text>Anglojęzyczny artykuł porównujący covid-19 do innych chorób zakaźnych</Text>
        <Text style={{color: '#CD2B2D'}}onPress={() => Linking.openURL('https://interestingengineering.com/comparing-the-covid-19-coronavirus-to-7-other-infectious-diseases')}>https://interestingengineering.com/comparing-the-covid-19-coronavirus-to-7-other-infectious-diseases</Text>

        <Block padding={[0, theme.sizes.base * 2]} style={{marginTop: 20}}></Block>
        <Text>Anglojęzyczny artykuł porównujący covid-19 do innych poprzednich epidemii</Text>
        <Text style={{color: '#CD2B2D'}}onPress={() => Linking.openURL('https://www.healthline.com/health-news/how-deadly-is-the-coronavirus-compared-to-past-outbreaks')}>https://www.healthline.com/health-news/how-deadly-is-the-coronavirus-compared-to-past-outbreaks</Text>


      </View>
    );
  }
}
