import React, { Component } from 'react';
 
import { StyleSheet, View, Button, TextInput, Alert,Text,Picker} from 'react-native';
 
export default class Mynewproject extends Component {
 
 constructor(props) {
      super(props);
        this.state = { 
            acceleration : '',
            fuelrate : '',
            co2 : '',
            fueltype : ''
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
        co2: (this.state.fueltype * (1 / this.state.fuelrate)).toFixed(0),
        fuelrate: this.state.fuelrate,
        acceleration: this.state.acceleration
       
      }),
    });
 
  }

  clearInput = () => {
    this.textInputacceleration.clear();
    this.textInputfuelrate.clear();
    // this.textInputco2.clear();
  }
  
 render() {
 
   return (
 
      <View style={styles.MainContainer}>
 
      <Picker
        selectedValue={this.state.fueltype}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue, itemIndex) => this.setState({fueltype: itemValue})}>
        <Picker.Item label="Enter Fuel Type" color="grey" />
        <Picker.Item label="Diesel" value="2650" />
        <Picker.Item label="Gasoline" value="2290" />
        <Picker.Item label="E85" value="1610" />
        <Picker.Item label="E20" value="2380" />
        </Picker>
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
            
            {/* <Text>CO2</Text>
            <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Enter value CO2"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ co2: text })} } 
            ref={ref => this.textInputco2 = ref}
            keyboardType = 'numeric'
            /> */}

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
