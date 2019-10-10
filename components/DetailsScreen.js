import React, { Component } from 'react';
import { Text, View } from 'react-native';


export default class DetailsScreen extends Component {
    constructor(props){
        super(props);
        this.state = { value : ''};
    }


    componentDidMount(){

        fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => response.json())
        .then((responseJson) => {
        
            this.setState( { value : responseJson.value } );

        })
        .catch((error) => {
        console.error(error);
        });

    }

    render(){
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{this.state.value}</Text>
        </View>
      );
    }
  }