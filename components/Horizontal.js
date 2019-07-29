import React, { Component } from 'react';

import {
  StyleSheet,
  View, Text, ScrollView, Dimensions
} from 'react-native';

export default class Horizontal extends Component {
  render() {
    return (
      <ScrollView horizontal={true} pagingEnabled={true} style={styles.container}>
      	<View style={styles.outer}>
      		<Text style={styles.innerText}>Welcome to LCO app</Text>
      	</View>
      	<View style={[styles.outer, styles.blue]}>
      		<Text style={styles.innerText}>Best quality videos</Text>
      	</View>
      	<View style={[styles.outer, styles.green]}>
      		<Text style={styles.innerText}>avaliable on Android an iOS</Text>
      	</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		 
	},
	outer: {
		backgroundColor: '#eb4d4b',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center', 
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
	innerText: {
		color: '#fff',
		fontSize: 23,
		fontWeight: 'bold', 
	},
	blue: {
		backgroundColor: '#686de0',
	},
	green: {
		backgroundColor: '#6ab04c',
	},
});
