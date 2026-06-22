import React from "react";

import {View,Text,FlatList,StyleSheet,TouchableOpacity,} from "react-native";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const calls = [
  {
    id: "1",
    name: "Raju",
    time: "Today at 11:11 AM",
    type: "call",
  },
  {
    id: "2",
    name: "Gokul",
    time: "Today at 11:51 AM",
    type: "call",
  },
  {
    id: "3",
    name: "Deepak",
    time: "Today at 01:11 AM",
    type: "video",
  },
];

export default function CallsScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Text style={styles.logo}>Calls</Text>

          <View style={styles.headerIcons}>
            <Ionicons
              name="search"
              size={24}
              color="white"
            />

            <Ionicons
              name="ellipsis-vertical"
              size={24}
              color="white"
              style={{ marginLeft: 15 }}
            />
          </View>
        </View>

        {/* Menu */}
        <View style={styles.menuRow}>
          <View style={styles.menuItem}>
            <Ionicons
              name="call-outline"
              size={22}
              color="black"
            />
            <Text style={styles.menuText}>
              Call
            </Text>
          </View>

          <View style={styles.menuItem}>
            <Ionicons
              name="calendar-outline"
              size={22}
              color="black"
            />
            <Text style={styles.menuText}>
              Schedule
            </Text>
          </View>

          <View style={styles.menuItem}>
            <Ionicons
              name="people-outline"
              size={22}
              color="black"
            />
            <Text style={styles.menuText}>
              Group
            </Text>
          </View>


          <View style={styles.menuItem}>
            <Ionicons
              name="keypad"
              size={22}
              color="black"
            />
            <Text style={styles.menuText}>
              Keypad
            </Text>
          </View>



          <View style={styles.menuItem}>
            <Ionicons
              name="grid-outline"
              size={22}
              color="black"
            />
            <Text style={styles.menuText}>
              Favorites
            </Text>
          </View>
        </View>
      </View>

      <Text style={styles.recent}>Recent</Text>

      <FlatList
        data={calls}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.callItem}>
            <View style={styles.avatar} />

            <View style={styles.callContent}>
              <Text style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.time}>
                {item.time}
              </Text>
            </View>

            {item.type === "call" ? (
              <Ionicons
                name="call"
                size={24}
                color="black"
              />
            ) : (
              <MaterialIcons
                name="videocam"
                size={24}
                color="black"
              />
            )}
          </View>
        )}
      />

      {/* Floating Button */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons
          name="person-add"
          size={28}
          color="black"
        />
      </TouchableOpacity>
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

  menuRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  menuItem: {
    alignItems: "center",
  },

  menuText: {
    fontSize: 11,
    fontWeight: "600",
    marginTop: 4,
  },

  recent: {
    margin: 12,
    backgroundColor: "#eee",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    fontSize: 12,
  },

  callItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ddd",
  },

  callContent: {
    flex: 1,
    marginLeft: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
  },

  time: {
    color: "#777",
    fontSize: 13,
  },

  fab: {
    position: "absolute",
    right: 20,
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#25D366",
    justifyContent: "center",
    alignItems: "center",
  },
});
