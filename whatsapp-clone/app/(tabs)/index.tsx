import React from "react";

import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const chats = [
  { id: "1", name: "Raju", message: "Hi Good", time: "11:11 AM" },
  { id: "2", name: "Deepak", message: "Morning", time: "11:45 AM" },
  { id: "3", name: "Gokul", message: "Hi Good", time: "01:11 PM" },
  { id: "4", name: "Alex", message: "How are you?", time: "03:15 PM" },
  { id: "5", name: "Team Group", message: "Meeting at 2 PM", time: "05:20 PM" },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
  <View style={styles.headerRow}>
    <Text style={styles.logo}>WhatsApp</Text>

    <View style={styles.headerIcons}>
      <Ionicons name="cash-outline" size={24} color="white" />
      <Ionicons
        name="camera-outline"
        size={24}
        color="white"
        style={{ marginLeft: 15 }}
      />
      <Ionicons
        name="ellipsis-vertical"
        size={24}
        color="white"
        style={{ marginLeft: 15 }}
      />
    </View>
  </View>

  <TextInput
    placeholder="Search Chats"
    placeholderTextColor="#666"
    style={styles.search}
  />
</View>

      {/* Filter Buttons */}
      <View style={styles.filterRow}>
        <TouchableOpacity style={styles.activeChip}>
          <Text style={styles.activeChipText}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chip}>
          <Text style={styles.chipText}>Unread</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chip}>
          <Text style={styles.chipText}>Favorites</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chip}>
          <Text style={styles.chipText}>Groups</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.plusChip}>
          <Ionicons
            name="add"
            size={18}
            color="#667781"
          />
        </TouchableOpacity>
      </View>

      {/* Chat List */}
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.chatItem}>
            <View style={styles.avatar} />

            <View style={styles.chatContent}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>

            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
      />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
  backgroundColor: "#25D366",
  paddingTop: 50,
  paddingHorizontal: 16,
  paddingBottom: 12,
},

headerRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},

logo: {
  color: "#fff",
  fontSize: 28,
  fontWeight: "bold",
},

headerIcons: {
  flexDirection: "row",
  alignItems: "center",
},

search: {
  backgroundColor: "#fff",
  borderRadius: 25,
  marginTop: 12,
  height: 48,
  paddingHorizontal: 16,
},

  filterRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  activeChip: {
    backgroundColor: "#25D366",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },

  activeChipText: {
    color: "#fff",
    fontWeight: "600",
  },

  chip: {
    backgroundColor: "#F0F2F5",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },

  chipText: {
    color: "#111B21",
  },

  plusChip: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F0F2F5",
    justifyContent: "center",
    alignItems: "center",
  },

  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: "#ddd",
  },

  chatContent: {
    flex: 1,
    marginLeft: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
  },

  message: {
    color: "#666",
  },

  time: {
    color: "#666",
    fontSize: 12,
  },
});
