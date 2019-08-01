import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from './app/components/Header';
import Mid from './app/components/Mid';
import Body from './app/components/Body';

export default class Home extends React.Component {
	render() {
		return(
			<ScrollView>
				<View style={styles.container}>
					<Header />
					<Mid />
					<Body />
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
