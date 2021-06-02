/**
 * @format
 */

// Made changes on 5/25/21 to add react-native-navigation:
// https://wix.github.io/react-native-navigation/docs/installing

import { Navigation } from "react-native-navigation";
//import {AppRegistry} from 'react-native';
import App from './App';
import Devices from './src/screens/devices'
import Profile from './src/screens/profile'
//import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);
Navigation.registerComponent('scan', () => App);
Navigation.registerComponent('devices', ()=> Devices)
Navigation.registerComponent('profile', ()=> Profile)
Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
		root: {
			bottomTabs: {
				id: 'primary-navigation-tabs',
				children: [
					{
						stack: {
							id: 'DEVICES_TAB',
							children: [
								{
									component: {
										id: 'DEVICES',
										name: 'devices'
									},
								}
							],
							options: {
								bottomTab: {
									text: 'Devices',
									selectedTextColor: '#999999'
								}
							}
						}
					},
					{
						stack: {
							id: 'PROFILE_TAB',
							children: [
								{
									component: {
										id: 'PROFILE',
										name: 'profile'
									}
								}
							],
							options: {
								bottomTab: {
									text: 'Profile',
									selectedTextColor: '#999999'
								}
							}
						}
					}
				]
			}
		}
	});
});