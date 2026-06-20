import { Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Chats",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbubble"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="updates"
        options={{
          title: "Updates",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="sync"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="communities"
        options={{
          title: "Communities",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="calls"
        options={{
          title: "Calls",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="call"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}