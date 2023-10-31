import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack, usePathname } from "expo-router";

const _layout = () => {
  const pathname = usePathname();

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default _layout;
