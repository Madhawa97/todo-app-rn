import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import React, {useState} from 'react';

export default function App() {
	const [tasks, setTasks] = useState([
        { task: "HTML I", done: true, id: 1 },
        { task: "CSS", done: true, id: 2 },
        { task: "Responsive design", done: true, id: 3 },
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.list}>
                    <FlatList
                        data={tasks}
                        renderItem={({ item }) => (
							<Text>{item.task}</Text>
						)}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

	content: {
		padding: 30,
	},

	list: {
		marginTop: 30,
	}
});
