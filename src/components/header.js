import React from 'react';
import { Text, View, ImageBackground } from 'react-native';

const Header = ({text, image}) => {
  return (
    <View style={{
        flex: 1,
        backgroundColor: '#333333'
      }}>
      	<ImageBackground source={image} style={{width: '100%', height: 250, flex: 1, resizeMode: 'cover', justifyContent: 'flex-end'}}>
	      <Text style={{
	      	color: '#FFFFFF',
	      	fontSize: 48
	      }}>{text}</Text>
	    </ImageBackground>
    </View>
  );
}

export default Header;