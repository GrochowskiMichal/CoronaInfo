import React, { Component } from 'react';

import {
  View,
  ScrollView,
} from 'react-native';

import { Block, Text } from "../../components";
import { theme, mocks } from "../../constants";
  
import DropDownBonus from '../../components/own/drop-down-bonus';
import HTMLView from '../../components/own/htmlview-bonus';
import HashMap from 'hashmap';

class Tab1 extends Component {
  
  constructor(props) {
	super(props);
  	this.state = {
  	buttonId: null, 
  	stateOfButtons: new HashMap(),
   	};
  }

  onPress = id => {
	if(this.state.stateOfButtons.get(id)) {
		let hm = this.state.stateOfButtons.clone().set(id, false);
		this.setState({stateOfButtons: hm});
	}
	else {
		let hm = this.state.stateOfButtons.clone().set(id, true);
		this.setState({stateOfButtons: hm});
	}
	if(this.state.buttonId === id) {this.setState({ buttonId: null })} 
	else {this.setState({ buttonId: id })}
  }

  render() {
	
    return (
		<View>
		  <Block flex={false} row center space="between" style={theme.tab1.styles.header}>
        	<Text h2 bold>{"Dowiedz się więcej na temat COVID-19"}</Text>
          </Block>

          <ScrollView
		    showsVerticalScrollIndicator={false}
          >

		    <Block flex={false} style={theme.tab1.styles.buttons}>
		      {mocks.virusInfos.map(virusInfo => (  
			    <View key={virusInfo.id}>
			  	  <DropDownBonus
			 	    pressedActionButton={this.onPress}
				    id={virusInfo.id}
				    contentVisible={false}
				    header={	  
				      <View center middle shadow style={(this.state.stateOfButtons.get(virusInfo.id)) ?  theme.buttons.buttonEn : theme.buttons.buttonDi}>
					    <Text center style={(this.state.stateOfButtons.get(virusInfo.id)) ?  theme.tab1.styles.textBlack : theme.tab1.styles.textWhite}> 
					      {virusInfo.name}
					    </Text>
					  </View>
				    }
				  >
				    <HTMLView
					  value={virusInfo.data}
					  key={virusInfo.id}
				    />
				  </DropDownBonus>
			    </View>
		      ))}
		    </Block>
		  </ScrollView>
		</View>
    );
  }
}

export default Tab1;
