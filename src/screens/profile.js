import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Navigation, NavigationComponent, Options } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Feather';
import Scanner from '../components/scanner'

class Profile extends NavigationComponent {
	static options: Options = {
		topBar: {
			title: {
				text: 'My Profile',
				color: 'white'
			},
			background: {
				color: 'black'
			},
			rightButtons: [
				{
					id: 'loginUser',
					text: 'Login'
				}
			]
		}
	}

	constructor(props){
		super(props)
		this.state = {
			devices: []
		}
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
				name: 'device_scanner'
			}
		})
	}

	render(){
		return (
			<View style={styles.root}>
				<Text style={{color: '#FFFFFF'}}>Login to view your profile</Text>
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

export default Profile;