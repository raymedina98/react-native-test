import React, { Component } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';
import Numbers from './components/Numbers'
import DetailsScreen from './components/DetailsScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class App extends Component {
 
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
         
         {this.state.pressed ? <Numbers numbers={this.state.numbers} navigation={this.props.navigation}/> : <View></View>}
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


// Create the stack navigator and set the App Component as Home
const AppNavigator = createStackNavigator(
  {
    Home: App,
    Details : DetailsScreen
  },
  {
    initialRouteName : 'Home'
  }
);

export default createAppContainer(AppNavigator); 