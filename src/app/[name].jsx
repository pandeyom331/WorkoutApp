import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import exercises from '../../assets/data/exercises.json';
import { Stack } from "expo-router";
import { useState } from "react";

export default function ExerciseDetailsScreen() {
    const params = useLocalSearchParams();
    const [isInstructionExpanded, setIsInstructionExapnded] = useState(false);
    const exercise = exercises.find((item) => item.name == params.name);

    if (!exercise) {
        return <Text> Exercise not Found!</Text>
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Stack.Screen options={{title: exercise.name, headerTitleAlign: 'center',}} />
            <View style={styles.panel}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.exerciseSubtitle}>
                    {exercise.muscle.toUpperCase()} | {exercise.equipment.toUpperCase()}
                </Text> 
            </View>

            <ScrollView style={styles.panel}>
            <Text style={styles.instructions} numberOfLines={isInstructionExpanded ? 0 : 3}> 
                {exercise.instructions}
            </Text>       
            <Text onPress={()=>setIsInstructionExapnded(!isInstructionExpanded)} style={styles.seeMore}>{isInstructionExpanded ? 'See less' : 'See more'}</Text>
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        gap:10,
    },
    exerciseName: {
        fontSize: 20,
        fontWeight: '500',
    },
    exerciseSubtitle: {
        color: 'dimgray'
    },
    instructions:{
        fontSize:16,
        lineHeight:22,
    },
    panel:{
        backgroundColor:'white',
        padding: 10,
        borderRadius:5,
    },
    seeMore:{
        alignSelf:'center',
        padding: 5,
        fontWeight:'600',
        color: 'gray',
    }
})

