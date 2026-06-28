import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";

export const openCamera = async () => {
  const { status } =
    await ImagePicker.requestCameraPermissionsAsync();

  if (status !== "granted") return;

  const result =
    await ImagePicker.launchCameraAsync();

  if (!result.canceled) {
    console.log(result.assets[0].uri);
  }
};

export default function CameraButton() {
  return (
    <TouchableOpacity onPress={openCamera}>
      <Ionicons
        name="camera-outline"
        size={24}
        color="white"
      />
    </TouchableOpacity>
  );
}

