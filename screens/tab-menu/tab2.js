import React, { Component } from 'react';

import {
    View,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
  
import HashMap from 'hashmap';
    
import { Block, Text } from "../../components";
import { theme } from "../../constants";
import { map } from "../../constants";
import { getData, getDate } from '../../constants/getter';
  

let request = new XMLHttpRequest();
var data = false;

class Tab2 extends Component {
  
  state = {img: null, data: null, ready: false, acctualData: null};

  ready = () => {
    this.setState({data: data});
    request.onreadystatechange = (e) => {};
    request.abort();
    this.setState({img: map.defaultMap});
    let thisData = (
      <Block>
        <Text h2 bold center>{getData(this.state.data).t00.name}</Text>
        <Text></Text>
        <Text h3 center>Liczba zakażonych: {getData(this.state.data).t00.countOfPatients}</Text>
        <Text h3 center>Liczba zgonów: {getData(this.state.data).t00.countOfDeaths}</Text>
        <Text></Text>
        <Text center>Wybierz województwo aby wyświetlić listę znajdujących się w nim szpitali zakaźnych{"\n"+getData(this.state.data).t00.places}</Text>
      </Block>
    );
   // <Text>ID: {getData(this.state.data).t00.id}</Text>
    this.setState({acctualData: thisData})
  }

  handleDataAsync = () => {
      
    request.open('GET', 'https://www.gov.pl/web/koronawirus/wykaz-zarazen-koronawirusem-sars-cov-2');
    request.onreadystatechange = (e) => {
       if (request.readyState !== 4) {
         return;
       }
  
       if (request.status === 200) {
         console.log('success');
         const dataFirst = request.responseText.split('<pre id="registerData" class="hide">');
         var aa = dataFirst[1]+'';
         const dataSecond = aa.split('</pre>');
         data = dataSecond[0];
         this.ready();
       } 
       else console.log(request.status);
    };
    request.send();
  };

  onPressAction = (imgId, dataId) => {
    let data = getData(this.state.data); 
    if(imgId === this.state.img) {
      this.setState({img:map.defaultMap});
      let thisData = (
        <Block>
          <Text h2 bold center>{data.t00.name}</Text>
          <Text></Text>
          <Text h3 center>Liczba zakażonych: {data.t00.countOfPatients}</Text>
          <Text h3 center>Liczba zgonów: {data.t00.countOfDeaths}</Text>
          <Text></Text>
          <Text center>Wybierz województwo aby wyświetlić listę znajdujących się w nim szpitali zakaźnych{"\n"+getData(this.state.data).t00.places}</Text>
        </Block>
        //<Text center>ID: {data.t00.id}</Text>
      );
      this.setState({acctualData: thisData})
    } else {
      this.setState({img:imgId});
      let dataHm = new HashMap();
      dataHm.set("t02", data.t02);
      dataHm.set("t04", data.t04);
      dataHm.set("t06", data.t06);
      dataHm.set("t08", data.t08);
      dataHm.set("t10", data.t10);
      dataHm.set("t12", data.t12);
      dataHm.set("t14", data.t14);
      dataHm.set("t16", data.t16);
      dataHm.set("t18", data.t18);
      dataHm.set("t20", data.t20);
      dataHm.set("t22", data.t22);
      dataHm.set("t24", data.t24);
      dataHm.set("t26", data.t26);
      dataHm.set("t28", data.t28);
      dataHm.set("t30", data.t30);
      dataHm.set("t32", data.t32);
      let thisDataValue = dataHm.get(dataId);
      let thisData = (
        <Block>
          <Text h2 bold center>Województwo: {thisDataValue.name.charAt(0).toUpperCase()+ thisDataValue.name.slice(1)}</Text>
          <Text></Text>
          <Text h3 center>Liczba zakażonych: {thisDataValue.countOfPatients}</Text>
          <Text h3 center>Liczba zgonów: {thisDataValue.countOfDeaths}</Text>
          <Text></Text>
          <Text h3 center>Lista oddziałów zakaźnych:</Text>
          <Text></Text>
          <Text>{"\n"+thisDataValue.places}</Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </Block>
        //<Text>ID: {thisDataValue.id}</Text>
      );
      this.setState({acctualData: thisData})
    }
  }

  render() {
    if(!this.state.ready) {
      this.handleDataAsync();
      this.setState({ready: true})
    }
    return (
      <View>
      	<Block flex={false} center style={theme.tab3.styles.header}>
        
          <Text h2 bold center>Dane pochodzą z Ministerstwa Zdrowia, aktualny stan na {'\n'+ getDate(this.state.data)}</Text>
          <Text h3 center>Wybierz województwo aby uzyskać informacje.</Text>
        </Block>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={theme.tab3.styles.container}
        >

		      <Block flex={false}>
    
            <ImageBackground
              style={{ height: map.heightImg, width: map.widthImg }}
              source={this.state.img}
            >

              {map.mapsData.map(mapData => (
                <TouchableOpacity
                  style={mapData.style}
                  onPress={() =>this.onPressAction(mapData.image, mapData.id)}
                />
              ))}        
            </ImageBackground>
		      </Block>
          
                <View>{this.state.acctualData}</View>
		    </ScrollView>
		  </View>
    );
  }

}

export default Tab2;
