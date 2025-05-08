import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import React, { ReactNode, useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, isLoading, error } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user && !error) {
      router.replace("/login");
    }
  }, [isLoading, user, router, error]);

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-background">
        <ActivityIndicator size="large" color="#666666" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center bg-background p-6">
        <Text className="text-red-500 text-center text-lg mb-4">Authentication Error</Text>
        <Text className="text-texts/70 text-center">{error}</Text>
      </View>
    );
  }

  if (!user) {
    return null; // Will redirect due to the useEffect
  }

  return <>{children}</>;
} 