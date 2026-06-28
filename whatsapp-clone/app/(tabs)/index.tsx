import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import { openCamera } from "@/components/CameraButton";
import MenuList from "@/components/menuList";
import { openGPay } from "@/components/PaymentButton";

interface Chat {
  id: string;
  name: string;
  lastMessage?: string;
}

export default function HomeScreen() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    loadChats();
  }, []);

  const loadChats = async () => {
    try {
      const response = await fetch(
        "http://192.168.1.3:5000/chats"
      );

      const data = await response.json();

      console.log("CHATS:", data);

      setChats(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredChats = chats.filter((item) =>
    item.name
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Text style={styles.logo}>WhatsApp</Text>

          <View style={styles.headerIcons}>
            <TouchableOpacity onPress={openGPay}>
              <Ionicons
                name="cash-outline"
                size={24}
                color="white"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={openCamera}>
              <Ionicons
                name="camera-outline"
                size={24}
                color="white"
                style={{ marginLeft: 15 }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setMenuVisible(true)}
            >
              <Ionicons
                name="ellipsis-vertical"
                size={24}
                color="white"
                style={{ marginLeft: 15 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TextInput
          placeholder="Search Chats"
          placeholderTextColor="#666"
          style={styles.search}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      

      <FlatList
        data={filteredChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() =>
              router.push({
                pathname: "/chat/raju",
                params: {
                  id: item.id,
                  name: item.name,
                },
              })
            }
          >
            <View style={styles.avatar} />

            <View style={styles.chatContent}>
              <Text style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.message}>
                {item.lastMessage ||
                  "Start chatting"}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />



      <Modal
        transparent
        visible={menuVisible}
        animationType="fade"
        onRequestClose={() =>
          setMenuVisible(false)
        }
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          activeOpacity={1}
          onPress={() =>
            setMenuVisible(false)
          }
        >
          <MenuList
            onClose={() =>
              setMenuVisible(false)
            }
          />
        </TouchableOpacity>
      </Modal>
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
});