import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native';
import { Card } from 'react-native-elements';

const data = [
	{
		imageUrl: "http://via.placeholder.com/160x160",
		title: "something 1"
	},
	{
		imageUrl: "http://via.placeholder.com/160x160",
		title: "something 2"
	},
	{
		imageUrl: "http://via.placeholder.com/160x160",
		title: "something 3"
	},
	{
		imageUrl: "http://via.placeholder.com/160x160",
		title: "something 4"
	},
	{
		imageUrl: "http://via.placeholder.com/160x160",
		title: "something 5"
	},
	{
		imageUrl: "http://via.placeholder.com/160x160",
		title: "something 6"
	},
];

export default class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: data
		};
	}

	render() {
		return(
			<FlatList
				horizontal
				data={this.state.data}
				renderItem={ ({item: rowData}) => {
						return(
							<Card
								style={{height: 200}}
								title={null}
								image={{url: rowData.imageUrl}}
								containerStyle={{padding: 0, width: 160, height: 200, marginTop: 150}}
							>
								<Text style={{marginBottom: 10}}>{rowData.title}</Text>
							</Card>
						);
					}
				}
				keyExtractor={(item, index) => index }
			/>
		);
	}
}
