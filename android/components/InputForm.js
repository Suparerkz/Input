import React, { Component } from 'react';
 
import { StyleSheet, View, Button, TextInput, Alert,Text} from 'react-native';
 
export default class Mynewproject extends Component {
 
 constructor(props) {
      super(props);
        this.state = { 
            acceleration : '',
            fuelrate : '',
            co2 : ''
          }
    }
 
  componentDidMount(){
    fetch('https://ecodrive.careerity.me/updatedata/5aeacdbd7c6f05930cbee3e8', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        co2: this.state.co2,
        fuelrate: this.state.fuelrate,
        acceleration: this.state.acceleration
       
      }),
    });
 
  }

  clearInput = () => {
    this.textInputacceleration.clear();
    this.textInputfuelrate.clear();
    this.textInputco2.clear();
  }
  
 render() {
 
   return (
 
      <View style={styles.MainContainer}>
 
          
            <Text>Acceleration</Text>
          <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Enter value Acceleration"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ acceleration: text })} } 
            ref={ref => this.textInputacceleration = ref}
            keyboardType = 'numeric'
            />
            <Text>Fuelrate</Text>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Enter value Fuelrate"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ fuelrate: text })} } 
            ref={ref => this.textInputfuelrate = ref}
            keyboardType = 'numeric'
            />
            <Text>CO2</Text>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Enter value CO2"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ co2: text })} } 
            ref={ref => this.textInputco2 = ref}
            keyboardType = 'numeric'
            />

          <View style={{marginBottom : 10}}>
 
            <Button 
            title='Submit' onPress={this.componentDidMount()} onPress={this.clearInput}
            
            />
 
          </View>
      
      </View>
 
           
   );
 }
}
 
const styles = StyleSheet.create({
 
  MainContainer :{
      
      flex:1,
      justifyContent: 'center',
      padding: 10,
  
  },
 
  TextInputStyle:
    {
      width: '100%',
      borderWidth: 1,
      borderColor: '#009688',
      height: 40,
      borderRadius: 10,
      marginBottom: 10,
      textAlign: 'center',
    }
 
});
