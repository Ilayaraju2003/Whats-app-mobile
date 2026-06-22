import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const groups = [
  { id: "1", name: "Group 1", message: "Hi ,Good", time: "11:11 AM" },
  { id: "2", name: "Group 2", message: "Morning", time: "11:45 AM" },
  { id: "3", name: "Group 3", message: "Hi ,Good", time: "01:11 PM" },
];

export default function CommunitiesScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Text style={styles.logo}>Communities</Text>

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

        <TouchableOpacity style={styles.communityBtn}>
          <Ionicons
            name="people-outline"
            size={22}
            color="#000"
          />
          <Text style={styles.communityText}>
            New community
          </Text>
        </TouchableOpacity>
      </View>

      {/* Community Section 1 */}
      <View style={styles.section}>
        <View style={styles.sectionTitle}>
          <Ionicons
            name="people"
            size={22}
            color="#000"
          />
          <Text style={styles.titleText}>
            Job Opening
          </Text>
        </View>

        {groups.map((item) => (
          <View key={item.id} style={styles.groupItem}>
            <View style={styles.avatar} />

            <View style={styles.chatContent}>
              <Text style={styles.name}>
                {item.name}
              </Text>
              <Text style={styles.message}>
                {item.message}
              </Text>
            </View>

            <Text style={styles.time}>
              {item.time}
            </Text>
          </View>
        ))}

        <TouchableOpacity style={styles.viewAll}>
          <Text style={styles.arrow}>{">"}</Text>
          <Text style={styles.viewAllText}>
            View all
          </Text>
        </TouchableOpacity>
      </View>

      {/* Community Section 2 */}
      <View style={styles.section}>
        <View style={styles.sectionTitle}>
          <Ionicons
            name="people"
            size={22}
            color="#000"
          />
          <Text style={styles.titleText}>
            Job Opening
          </Text>
        </View>

        {groups.map((item) => (
          <View key={`second-${item.id}`} style={styles.groupItem}>
            <View style={styles.avatar} />

            <View style={styles.chatContent}>
              <Text style={styles.name}>
                {item.name}
              </Text>
              <Text style={styles.message}>
                {item.message}
              </Text>
            </View>

            <Text style={styles.time}>
              {item.time}
            </Text>
          </View>
        ))}

        <TouchableOpacity style={styles.viewAll}>
          <Text style={styles.arrow}>{">"}</Text>
          <Text style={styles.viewAllText}>
            View all
          </Text>
        </TouchableOpacity>
      </View>
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
    paddingBottom: 15,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },

  communityBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 12,
  },

  communityText: {
    marginLeft: 8,
    fontWeight: "bold",
  },

  section: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },

  sectionTitle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  titleText: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: "bold",
  },

  groupItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#ddd",
  },

  chatContent: {
    flex: 1,
    marginLeft: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
  },

  message: {
    color: "#666",
    fontSize: 13,
  },

  time: {
    fontSize: 12,
    fontWeight: "bold",
  },

  viewAll: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  arrow: {
    fontSize: 18,
    fontWeight: "bold",
  },

  viewAllText: {
    marginLeft: 8,
    backgroundColor: "#ddd",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
    fontWeight: "bold",
  },
});
