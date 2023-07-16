import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const HomeScreen = () => {
  // Example habit data
  const exampleHabits = [
    { id: "1", name: "Drink Water", color: "#55ACEE", icon: "local-drink" },
    { id: "2", name: "Exercise", color: "#FF6B6B", icon: "directions-run" },
    { id: "3", name: "Read", color: "#F9BF3B", icon: "menu-book" },
  ];

  // Render each habit as a card
  const renderHabitCard = ({ item }) => (
    <View style={[styles.habitCard, { backgroundColor: item.color }]}>
      <Text style={styles.habitName}>{item.name}</Text>
      {/* You can display the habit icon here */}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={exampleHabits}
        renderItem={renderHabitCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  listContainer: {
    flexGrow: 1,
  },
  habitCard: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  habitName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default HomeScreen;
