import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

interface MenuListProps {
  onClose: () => void;
}

export default function MenuList({
  onClose,
}: MenuListProps) {
  const menuItems = [
    "New Group",
    "Starred Messages",
    "Linked Devices",
    "Settings",
    "Logout",
  ];

  const handlePress = (item: string) => {
    console.log(item);

    // Add navigation here later
    // router.push("/settings")

    onClose();
  };

  return (
    <View style={styles.menu}>
      {menuItems.map((item) => (
        <TouchableOpacity
          key={item}
          style={styles.menuItem}
          onPress={() => handlePress(item)}
        >
          <Text style={styles.menuText}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>

    
  );
}

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    top: 60,
    right: 10,
    width: 220,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 5,
    elevation: 5,
  },

  menuItem: {
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  menuText: {
    fontSize: 16,
    color: "#111B21",
  },
});