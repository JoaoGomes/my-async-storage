import React, { useState } from 'react';
import { StyleSheet, Text, View, Button }  from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
	const [data, setData] = useState();
	async function onSaveAsync()  {
		try {
			const value = {id: 1, msg: 'Algum texto'};
			const jsonValue = JSON.stringify(value);
			await AsyncStorage.setItem('@storage_Key', jsonVAlue);
	} catch (e) {
		console.log(e);
	}
}

async function onReadAsync() {
	try {
		const jsonValue = await AsyncStorage.getItem('@storage_Key')
		setData(jsonValue);
	} catch(e) {
		console.log(e);
	}
}

return (
	<View style={styles.container}>
		<Text>Async Storage</Text>
		<Button onPress={onSaveAsync} title="Salvar" color="#841584" />
		<Button onPress={onReadAsync} title="Ler" color="#45AA89"/>
		{ data && <Text>{data}</Text> }
	</View>
);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
