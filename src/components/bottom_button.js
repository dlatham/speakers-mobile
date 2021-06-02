import React from 'react';
import { Text, View, Button } from 'react-native';

class BottomButton extends React.Component {

  render(){
    return (
      <View style={{
          flex: 1,
          height: 80,
          width: '100%',
          position: 'absolute',
          bottom: 0,
          left: 0,
          backgroundColor: '#000000'
        }}>
        <Button title={this.props.text} color="#FFFFFF" style={{height: 100}} onClick={(e)=>{console.log(e)}} />
      </View>
    );
  }
  
}

export default BottomButton;