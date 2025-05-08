import { Link, useNavigation } from "expo-router";
import { useLayoutEffect, useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

export default function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({ 
      headerShown: true,
      title: "Login",
      headerStyle: {
        backgroundColor: '#f0f0f0', // bg-accent/20 equivalent
      },
      headerTintColor: '#000000', // text-texts equivalent
    });
  }, [navigation]);

  const handleLogin = () => {
    // TODO: Implement login logic
    console.log("Login attempt with:", { username, password });
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 px-6 py-8">
        <View className="space-y-6">
          <View>
            <Text className="text-texts mb-2">Username</Text>
            <TextInput
              className="bg-accent/30 p-4 rounded-xl text-texts"
              value={username}
              onChangeText={setUsername}
              placeholder="Enter your username"
              placeholderTextColor="#666"
            />
          </View>

          <View>
            <Text className="text-texts mb-2">Password</Text>
            <TextInput
              className="bg-accent/30 p-4 rounded-xl text-texts"
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              placeholderTextColor="#666"
              secureTextEntry
            />
          </View>

          <Pressable
            onPress={handleLogin}
            className="bg-accent/30 p-4 rounded-xl mt-6"
            style={({ pressed }) => [
              {
                transform: [{ scale: pressed ? 0.98 : 1 }],
                opacity: pressed ? 0.9 : 1,
              },
            ]}
          >
            <Text className="text-xl font-semibold text-texts text-center">Login</Text>
          </Pressable>

          <View className="flex-row justify-center mt-4">
            <Text className="text-texts/70">Don't have an account? </Text>
            <Link href="/signup" asChild>
              <Pressable>
                <Text className="text-accent font-semibold">Sign Up</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
} 