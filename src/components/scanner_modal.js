import React from 'react';
import { Text, View, Button, Modal } from 'react-native';
import { BleManager } from 'react-native-ble-plx';

class ScannerModal extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			status: 'off',
			devices: [],
			manager: new BleManager(),
		}
	}

	componentWillMount() {
	    const subscription = this.state.manager.onStateChange((state) => {
	        if (state === 'PoweredOn') {
	            this.scanAndConnect();
	            subscription.remove();
	        }
	    }, true);
	}

	scanAndConnect() {
	    this.state.manager.startDeviceScan(null, null, (error, device) => {
	        if (error) {
	            // Handle error (scanning will be stopped automatically)
	            return
	        }

	        this.setState(prevState => ({
  				devices: [...prevState.devices, device.name]
			}))

	        // Check if it is a device you are looking for based on advertisement data
	        // or other criteria.
	        // if (device.name === 'TI BLE Sensor Tag' || 
	        //     device.name === 'SensorTag') {
	            
	        //     // Stop scanning as it's not necessary if you are scanning for one device.
	        //     this.manager.stopDeviceScan();

	        //     // Proceed with connection.
	        // }
	    });
	}

	render(){
		return (
			<Modal visible={this.props.visible}>
				<Text>{this.state.devices}</Text>
			</Modal>
		);
	}


}

export default ScannerModal;