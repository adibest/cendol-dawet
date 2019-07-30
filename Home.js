import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from './app/components/Header';
import HeroImage from './app/components/HeroImage';
import Body from './app/components/Body';

export default class Home extends React.Component {
	render() {
		return(
			<ScrollView style={styles.container}>
				<Header />
				<HeroImage />
				<Body />
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
