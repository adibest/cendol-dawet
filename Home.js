import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChatList from './components/ChatList';

export default class Home extends React.Component {
	render() {
		return(
			<View style={styles.container}>
				<ChatList />
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	}
});
