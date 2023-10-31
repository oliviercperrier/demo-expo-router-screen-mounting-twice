import { View, Text } from "react-native";
import React, { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    console.log("Profile mounted");
  }, []);

  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
