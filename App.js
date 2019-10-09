import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import Numbers from './components/Numbers'
 
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { number : '', pressed : false, numbers : 0 }

    this._handleChange = this._handleChange.bind(this);
    this._onPressButton = this._onPressButton.bind(this);
  }

  _handleChange(text){

    // Regex for only accept numbers
    if(/^[0-9\s]*$/.test(text)){
      this.setState({number : text});
   }
  }

  // Return an array of fibonacci sequence
  fibonacci (number) {
    if (number < 2) {
        return [1];   
    }
    if (number < 3) {
        return [1, 1];
    }

    var sequence = this.fibonacci(number - 1);
    sequence.push(sequence[number - 2] + sequence[number - 3]);
    return sequence;
  };  

  _onPressButton() {
    this.setState(state => ({
      pressed : !this.state.pressed,
      numbers : this.fibonacci(this.state.number)
    }));
  }


  render() {
      return (
        <View style={styles.container}>
            <TextInput
              style={{height: 40}}
              placeholder="Enter a number"
              onChangeText={this._handleChange}
              value={this.state.number}
            />
         {this.state.number>10 ? <Button title={this.state.pressed ? "STOP" : "START"} onPress={this._onPressButton} /> : <View></View>}
         <View style={{height:40}}></View>
         {this.state.pressed ? <Numbers numbers={this.state.numbers}/> : <View></View>}
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
  },
});
