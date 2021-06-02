import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Navigation, NavigationComponent, Options } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Feather';
import Scanner from '../components/scanner';

class Devices extends NavigationComponent {
	static options: Options = {
		topBar: {
			title: {
				text: 'My Devices',
				color: 'white'
			},
			background: {
				color: 'black'
			},
			rightButtons: [
				{
					id: 'addDevice',
					text: 'Add'
				}
			]
		}
	}

	constructor(props){
		super(props)
		this.state = {
			devices: []
		}
		Navigation.registerComponent('scanner', ()=> Scanner)
	}

	componentDidMount() {
		console.log("Mounted component")
		this.navigationEventListener = Navigation.events().bindComponent(this);
	}

	componentWillUnmount() {
		// Unregistering listeners bound to components isn't mandatory since RNN handles the unregistration for you
		if (this.navigationEventListener) {
			this.navigationEventListener.remove();
		}
	}

	navigationButtonPressed({ buttonId }) {
		console.log(buttonId)
		Navigation.showModal({
			component: {
				name: 'scanner',
				options: {
					topBar: {
						title: {
							text: 'Add a device...'
						}
					}
				}
			}
		})
	}

	render(){
		const hasDevices = this.state.devices.length > 0
		return (
			<View style={styles.root}>
			{hasDevices 
				? <View style={styles.emptyContainer}><Text style={{color: 'white'}}>Your devices:</Text></View>
				: <View style={styles.emptyContainer}><Text style={{color: 'white', marginBottom: 10}}>You have no devices. Add a device to get started.</Text><Icon name="speaker" color="#FFFFFF" size={32} /></View>
			}
			</View>
		)
	}

}

const styles = StyleSheet.create({
	root: {
	    flex: 1,
	    alignItems: 'center',
	    justifyContent: 'center',
	    backgroundColor: '#000000'
  	},
  	emptyContainer: {
  		flex: 1,
	    alignItems: 'center',
	    justifyContent: 'center',
	    backgroundColor: '#000000',
	    color: 'white'
  	}
})

export default Devices;