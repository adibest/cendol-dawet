import React, { Component } from 'react';

import {
  StyleSheet,
  View, Text
} from 'react-native';

export default class Superman extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<Text>I am Superman</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});