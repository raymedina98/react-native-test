import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Numbers extends Component {
    constructor(props){
        super(props);
        this.state = { showNumber: true };

    }
    
    componentDidMount(){
        // Show a number every 500ms
        setInterval(() => (
          this.setState(previousState => (
            { showNumber: !previousState.showNumber }
          ))
        ), 500);
      }
      
    render() {
        if (!this.state.showNumber) {
          return null;
        }

        const listNumber = [...this.props.numbers];
        
        return (
          <Text>{listNumber.map( (number, index) => number%2==0 ? <Text key={number.index} style={{color : 'black'}}>{number}</Text> : <Text key={number.index} style={{color : 'red'}}>{number}</Text>)}</Text>
        );
      }
}