import React, { Component } from "react";
import {
  View
} from "react-native";
import { WebView } from 'react-native-webview';
import { Text } from "../../components";

export default class Tab4 extends Component {
  state = {};


  render() {
    return (
      
        
        <WebView
          scalesPageToFit={true}
          bounces={false}
          javaScriptEnabled
          source={{
            html: `
                  <!DOCTYPE html>
                  <html>
                    <head></head>
                    <body>                                
                    <iframe width=100% height="2000" src="https://covidstats.app/"  frameborder="0" style="border:0" allowfullscreen></iframe>
                    </body>
                  </html>
            `,
          }}
          automaticallyAdjustContentInsets={false}
        />
       // src="https://datastudio.google.com/embed/reporting/60290996-339f-4bb4-bd45-4ef2e2754417/page/wIVJB"
     
    );
  }
}
