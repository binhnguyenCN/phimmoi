// libs
import { StyleSheet, View } from "react-native";
import React from "react";
// layouts
import Screen from "@/components/Layout";
import ListItem from "@/components/ListItem";
import AppIcon from "@/components/AppIcon";
import colors from "@/constants/colors";
// others
import { useAuth } from "@/auth/context";

const avatar = require("../../assets/avatar.png");

const AccountScreen = () => {
  const { user, removeUser } = useAuth();
  const logOut = () => {
    removeUser();
  };
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem title={user?.name} subTitle={user?.email} image={avatar} />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Logout"
          IconComponent={
            <AppIcon name="logout" backgroundColor={colors.primary} />
          }
          onPress={logOut}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.black
  },
  container: {
    marginVertical: 20
  }
});
export default AccountScreen;
