import React from 'react';
import { Text, View } from 'react-native';
import { BleManager } from 'react-native-ble-plx';

class BLEScanner extends React.Component {
	constructor(props){
		super(props);
		this.state = {status: 'off'}
		this.manager = new BleManager();
		this.manager.onStateChange((state)=>{
			this.setState({status: state})
		})
	}

	render(){
		return (
			<Text>{this.state.status}</Text>
		);
	}

}

export default BLEScanner;