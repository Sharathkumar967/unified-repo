import { View, Text, Button } from "react-native";
import React from "react";
import storage from "@repo/redux/src/storage";
import { tokenStorage } from "@repo/api";
import { clearAuthDetails, useAppDispatch } from "@repo/redux";
import { router } from "expo-router";

const index = () => {
  const dispatch = useAppDispatch();
  const handleLogout = async () => {
    await tokenStorage.setAccessToken("");
    await tokenStorage.setRefreshToken("");

    dispatch(clearAuthDetails());
    router.replace("/login");
  };

  return (
    <View>
      <Text>Secondary Student Index Page</Text>

      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default index;
