import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Numbers extends Component {
    constructor(props){
        super(props);
        this.state = { showNumber: true, count : 0, decrement : false };

    }
    
    componentDidMount(){
        // Show a number every 500ms
        this.interval = setInterval(() => (
          this.setState(previousState => (
            { showNumber: !previousState.showNumber, 
              count :  previousState.decrement ? previousState.count - 1 : previousState.count + 1 }
          ))
        ), 500);
      }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
      
    render() {
        if (!this.state.showNumber) {
          return null;
        }

        const listNumber = [...this.props.numbers];


        //When the sequence is over, navigate to the details screen for the API response
       if(this.state.count > listNumber.length){
        this.props.navigation.navigate('Details');
       }

        return (
            <View>

               {listNumber[this.state.count]%2==0 ? <Text style={{color : 'black'}}>{listNumber[this.state.count]}</Text> 
               : <Text style={{color : 'red'}}>{listNumber[this.state.count]}</Text>}

            </View>

          );
      }
}