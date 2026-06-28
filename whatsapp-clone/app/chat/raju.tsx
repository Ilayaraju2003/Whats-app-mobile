import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, router } from "expo-router";
import socket from "@/services/socket";

interface Message {
  id: string;
  text: string;
  senderId: string;
  chatId: string;
  createdAt?: string;
  sender?: {
    id: string;
    name: string;
  };
}

export default function ChatScreen() {
  const { id, name } = useLocalSearchParams();

  const CHAT_ID = String(id);

  // Logged in user
  const USER_ID = "1";

  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    loadMessages();

    socket.emit("join_chat", CHAT_ID);

    const receiveMessage = (message: Message) => {
      if (message.chatId !== CHAT_ID) return;

      setMessages((prev) => {
        const exists = prev.some((m) => m.id === message.id);

        if (exists) return prev;

        return [...prev, message];
      });
    };

    socket.on("receive_message", receiveMessage);

    return () => {
      socket.off("receive_message", receiveMessage);
    };
  }, []);

  const loadMessages = async () => {
    try {
      const response = await fetch(
        `http://192.168.1.3:5000/messages/${CHAT_ID}`
      );

      const data = await response.json();

      setMessages(data);
    } catch (err) {
      console.log(err);
    }
  };

  const sendMessage = async () => {
    if (!text.trim()) return;

    try {
      const response = await fetch(
        "http://192.168.1.3:5000/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text,
            senderId: USER_ID,
            chatId: CHAT_ID,
          }),
        }
      );

      const message = await response.json();

      socket.emit("send_message", message);

      setText("");
    } catch (err) {
      console.log(err);
    }
  };

  const renderItem = ({ item }: { item: Message }) => {
    const isMe = item.senderId === USER_ID;

    return (
      <View
        style={[
          styles.row,
          {
            justifyContent: isMe
              ? "flex-end"
              : "flex-start",
          },
        ]}
      >
        <View
          style={[
            styles.bubble,
            isMe
              ? styles.myBubble
              : styles.otherBubble,
          ]}
        >
          <Text style={styles.message}>
            {item.text}
          </Text>

          <Text style={styles.time}>
            {item.createdAt
              ? new Date(item.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : ""}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : undefined
      }
    >
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="#fff"
          />
        </TouchableOpacity>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {String(name || "?")
              .charAt(0)
              .toUpperCase()}
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.headerName}>
            {name}
          </Text>

        </View>

        <Ionicons
          name="videocam"
          size={24}
          color="#fff"
          style={{ marginHorizontal: 10 }}
        />

        <Ionicons
          name="call"
          size={22}
          color="#fff"
          style={{ marginHorizontal: 10 }}
        />

        <Ionicons
          name="ellipsis-vertical"
          size={22}
          color="#fff"
        />
      </View>

      {/* Messages */}

      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item, index) =>
          `${item.id}-${index}`
        }
        contentContainerStyle={{
          padding: 10,
        }}
      />

      {/* Footer */}

      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <Ionicons
            name="happy-outline"
            size={24}
            color="#777"
          />

          <TextInput
            placeholder="Message"
            value={text}
            onChangeText={setText}
            style={styles.input}
          />

          <Ionicons
            name="attach"
            size={22}
            color="#777"
          />

          <Ionicons
            name="camera"
            size={22}
            color="#777"
            style={{ marginLeft: 10 }}
          />
        </View>

        <TouchableOpacity
          style={styles.send}
          onPress={sendMessage}
        >
          <Ionicons
            name="send"
            size={22}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE5DD",
  },

  header: {
    backgroundColor: "#075E54",
    height: 90,
    paddingTop: 40,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 12,
  },

  avatarText: {
    fontWeight: "bold",
    fontSize: 18,
  },

  headerName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },

  online: {
    color: "#ddd",
    fontSize: 12,
  },

  row: {
    flexDirection: "row",
    marginVertical: 4,
  },

  bubble: {
    maxWidth: "80%",
    padding: 10,
    borderRadius: 10,
  },

  myBubble: {
    backgroundColor: "#DCF8C6",
  },

  otherBubble: {
    backgroundColor: "#fff",
  },

  message: {
    fontSize: 16,
    color: "#000",
  },

  time: {
    marginTop: 4,
    fontSize: 10,
    color: "#777",
    alignSelf: "flex-end",
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#ECE5DD",
  },

  inputContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    height: 50,
  },

  input: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
  },

  send: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#25D366",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
});