import React from "react";

import {View,Text,FlatList,StyleSheet,TouchableOpacity,} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const statuses = [
    { id: "1", name: "Raju", time: "Today at 11:11 AM" },
    { id: "2", name: "Gokul", time: "Today at 11:51 AM" },
    { id: "3", name: "Deepak", time: "Today at 01:11 PM" },
];

const channels = [
    { id: "1", name: "Group1", message: "Hi, Good", time: "11:11 AM" },
    { id: "2", name: "Group2", message: "Morning", time: "11:45 AM" },
    { id: "3", name: "Group3", message: "Hi, Good", time: "01:11 PM" },
];

export default function UpdatesScreen() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <Text style={styles.logo}>Updates</Text>

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

                <Text style={styles.subTitle}>Status</Text>
            </View>

            {/* My Status */}
            <View style={styles.statusItem}>
                <View style={styles.avatar}>
                    <Ionicons
                        name="person"
                        size={24}
                        color="#666"
                    />
                </View>

                <View>
                    <Text style={styles.name}>My Status</Text>
                    <Text style={styles.message}>
                        Tap to add status
                    </Text>
                </View>
            </View>

            <Text style={styles.recent}>Recent</Text>

            <FlatList
                data={statuses}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.statusItem}>
                        <View style={styles.circle} />

                        <View>
                            <Text style={styles.name}>
                                {item.name}
                            </Text>
                            <Text style={styles.message}>
                                {item.time}
                            </Text>
                        </View>
                    </View>
                )}
                ListFooterComponent={
                    <>
                        <View style={styles.channelHeader}>
                            <Text style={styles.channelTitle}>
                                Channels
                            </Text>

                            <TouchableOpacity
                                style={styles.exploreBtn}
                            >
                                <Text>Explore</Text>
                            </TouchableOpacity>
                        </View>

                        {channels.map((item) => (
                            <View
                                key={item.id}
                                style={styles.channelItem}
                            >
                                <View style={styles.circle} />

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
                    </>
                }
            />

            {/* Floating Buttons */}
            <TouchableOpacity style={styles.editFab}>
                <Ionicons
                    name="create-outline"
                    size={24}
                    color="#000"
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.cameraFab}>
                <Ionicons
                    name="camera-outline"
                    size={28}
                    color="#fff"
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

    subTitle: {
        marginTop: 12,
        fontWeight: "bold",
        fontSize: 25,
        paddingTop: 18,
        color: "#fff",
        height: 48,

    },

    statusItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
    },

    avatar: {
        width: 55,
        height: 55,
        borderRadius: 28,
        backgroundColor: "#ddd",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },

    circle: {
        width: 55,
        height: 55,
        borderRadius: 28,
        backgroundColor: "#ddd",
        marginRight: 10,
    },

    name: {
        fontSize: 16,
        fontWeight: "bold",
    },

    message: {
        color: "#777",
        fontSize: 13,
    },

    recent: {
        marginLeft: 16,
        marginBottom: 8,
        fontWeight: "bold",
        color: "#666",
    },

    channelHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        marginTop: 10,
    },

    channelTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },

    exploreBtn: {
        backgroundColor: "#eee",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 15,
    },

    channelItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
    },

    chatContent: {
        flex: 1,
    },

    time: {
        fontSize: 12,
        fontWeight: "bold",
    },

    editFab: {
        position: "absolute",
        right: 20,
        bottom: 110,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#EDEDED",
        justifyContent: "center",
        alignItems: "center",
    },

    cameraFab: {
        position: "absolute",
        right: 20,
        bottom: 40,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#25D366",
        justifyContent: "center",
        alignItems: "center",
    },
});