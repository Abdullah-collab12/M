import { useAuth } from "@/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function ProfileHeader() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.replace("/login");
  };

  return (
    <View className="flex-row justify-between items-center p-4 bg-accent/20">
      <View>
        <Text className="text-xl font-semibold text-texts">
          {user?.email?.split("@")[0] || "User"}
        </Text>
        <Text className="text-texts/70">{user?.email}</Text>
      </View>
      <Pressable
        onPress={handleLogout}
        className="p-2 bg-accent/30 rounded-full"
        style={({ pressed }) => [
          {
            transform: [{ scale: pressed ? 0.95 : 1 }],
            opacity: pressed ? 0.8 : 1,
          },
        ]}
      >
        <Ionicons name="log-out-outline" size={24} color="#000" />
      </Pressable>
    </View>
  );
} 