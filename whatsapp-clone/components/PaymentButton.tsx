/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { TouchableOpacity, Linking } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const openGPay = async () => {
  const upiUrl =
    "upi://pay?pa=yourupi@okicici&pn=Kavi&am=10&cu=INR";

  try {
    await Linking.openURL(upiUrl);
  } catch (error) {
    console.log("No UPI app found");
  }
};
export default function PaymentButton() {
  return (
    <TouchableOpacity onPress={openGPay}>
      <Ionicons
        name="cash-outline"
        size={24}
        color="white"
      />
    </TouchableOpacity>
  );
}