import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Horizontal from './components/Horizontal';

export default class Home extends React.Component {
	render() {
		return(
			<View style={styles.container}>
				<Horizontal />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',  
	},
});