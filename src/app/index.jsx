import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ExerciseListItem from '../components/ExerciseListItem';
import exercises from '../../assets/data/exercises.json';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{gap:5}}
        data={exercises}
        keyExtractor={(item, index)=> (item.name + index)}
        renderItem={({ item }) =><ExerciseListItem item={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ghostwhite',
    justifyContent: 'center',
    padding: 10,
  },
});