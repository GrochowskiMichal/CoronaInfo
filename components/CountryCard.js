import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';

export default class CountryCard extends React.PureComponent {
  render() {
    return (
      <View>
        <Card key={this.props.data.country} style={styles.card}>
          <Card.Content>
            <View style={{flexDirection: 'row'}}>
              <Paragraph style={{fontWeight: 'bold', fontSize: 20}}>
                {this.props.data.country}
              </Paragraph>
            </View>
            <Paragraph style={{marginTop: 5}}>
              <Text>
                {' '}
                <Text>
                  <Text style={{fontWeight: 'bold'}}>{this.props.data.cases}</Text> Łącznie przypadków
                </Text>
              </Text>
            </Paragraph>
            <Paragraph>
              <Text>
                {' '}
                <Text>
                  <Text style={{fontWeight: 'bold'}}>{this.props.data.todayCases}</Text>{' '}
                  Nowych przypadków
                </Text>
              </Text>
            </Paragraph>
            <Paragraph>
              <Text>
                {' '}
                <Text>
                  <Text style={{fontWeight: 'bold'}}>{this.props.data.deaths}</Text> Łącznie
                  Zgonów
                </Text>
              </Text>
            </Paragraph>
            <Paragraph style={{marginBottom: 15}}>
              <Text>
               {' '}
                <Text>
                  <Text style={{fontWeight: 'bold'}}>{this.props.data.todayDeaths}</Text>{' '}
                  Nowych zgonów
                </Text>
              </Text>
            </Paragraph>
          </Card.Content>
          <View style={styles.cardFooter}>
            <View style={{flexDirection: 'row'}}>
              <Paragraph style={{marginLeft: 10, fontWeight: 'bold'}}>
                <Text>
                  {' '}
                </Text>
                <Text style={{fontWeight: 'bold'}}>{this.props.data.recovered}</Text>{' '}
                Wyleczonych
              </Paragraph>
            </View>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardFooter: {
    backgroundColor: '#5C6A7833',
    padding: 6,
    borderBottomLeftRadius: 42,
    borderBottomRightRadius: 42,
    
  },
  card: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    borderColor: '#CD2B2D',
    borderWidth: 1.5,
    borderBottomLeftRadius: 42,
    borderBottomRightRadius: 42,
    borderTopLeftRadius: 42,
    borderTopRightRadius: 42,
    
  },
});
