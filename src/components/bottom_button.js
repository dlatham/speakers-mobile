import React from 'react';
import { Text, View, Button } from 'react-native';

const BottomButton = ({text}) => {
  return (
    <View style={{
        flex: 1,
        height: 100,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: '#000000'
      }}>
      <Button title={text} color="#FFFFFF" style={{height: 100}} />
    </View>
  );
}

export default BottomButton;