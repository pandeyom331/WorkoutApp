import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ExerciseListItem from "../components/ExerciseListItem";
import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator } from "react-native";
import { gql } from "graphql-request";
import client from "../graphqlClient";

const exerciseQuery = gql`
  query exercises($muscle: String, $name: String) {
    exercises(muscle: $muscle, name: $name) {
      name
      muscle
      equipment
    }
  }
`;

export default function ExercisesScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["exercises"],
    queryFn:() => client.request(exerciseQuery),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    console.log(error);
    return <Text>Failed to fetch exercises.</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ gap: 5 }}
        data={data?.exercises}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => <ExerciseListItem item={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite",
    justifyContent: "center",
    padding: 10,
  },
});
