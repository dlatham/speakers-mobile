import React from 'react';
import { Text, View, Button, FlatList, ActivityIndicator } from 'react-native';
import { NavigationComponent } from 'react-native-navigation';
import { BleManager } from 'react-native-ble-plx';

class Scanner extends NavigationComponent {
	static options: Options = {
		topBar: {
			title: {
				text: 'Add a device...'
			}
		}
	}

	constructor(props){
		super(props);
		this.state = {
			status: 'off',
			devices: [],
			scanning: true,
			manager: new BleManager(),
		}
	}

	componentDidMount() {
	    const subscription = this.state.manager.onStateChange((state) => {
	        if (state === 'PoweredOn' && this.state.scanning) {
	            this.scanAndConnect();
	            subscription.remove();
	        }
	    }, true);
	}

	componentWillUnmount() {
		this.state.manager.stopDeviceScan()
	}

	scanAndConnect() {
	    this.state.manager.startDeviceScan(null, null, (error, device) => {
	        if (error) {
	            // Handle error (scanning will be stopped automatically)
	            return
	        }

	        if (!this.state.devices.find(d=>{return d.id === device.id})){
		        this.setState(prevState => ({
	  				devices: [...prevState.devices, device]
				}))
		    }

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
		const isLoading = true
		const hasDevices = this.state.devices.length > 0
		return (
			<View style={{flex: 1, backgroundColor: 'white'}}>
				<View><Text style={{margin: 20, fontSize: 32, fontWeight: '400'}}>Add a device</Text></View>
				{isLoading && 
					<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
						<Text>Finding devices...</Text>
						<ActivityIndicator />
					</View>
				}
				<FlatList 
					data={this.state.devices} 
					renderItem={({item, index, separator})=>(
						<View key={item.id}><Text style={{color: '#000000'}}>{item.id}: {item.name}</Text></View>
					)} 
				/>
				
			</View>
		);
	}


}

export default Scanner;