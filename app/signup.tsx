import { Link, useNavigation } from "expo-router";
import { useLayoutEffect, useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

export default function Signup() {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({ 
      headerShown: true,
      title: "Sign Up",
      headerStyle: {
        backgroundColor: '#f0f0f0', // bg-accent/20 equivalent
      },
      headerTintColor: '#000000', // text-texts equivalent
    });
  }, [navigation]);

  const handleSignup = () => {
    // TODO: Implement signup logic
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signup attempt with:", { firstName, username, email, password });
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 px-6 py-8">
        <View className="space-y-4">
          <View>
            <Text className="text-texts mb-2">First Name</Text>
            <TextInput
              className="bg-accent/30 p-4 rounded-xl text-texts"
              value={firstName}
              onChangeText={setFirstName}
              placeholder="Enter your first name"
              placeholderTextColor="#666"
            />
          </View>

          <View>
            <Text className="text-texts mb-2">Username</Text>
            <TextInput
              className="bg-accent/30 p-4 rounded-xl text-texts"
              value={username}
              onChangeText={setUsername}
              placeholder="Choose a username"
              placeholderTextColor="#666"
            />
          </View>

          <View>
            <Text className="text-texts mb-2">Email</Text>
            <TextInput
              className="bg-accent/30 p-4 rounded-xl text-texts"
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor="#666"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View>
            <Text className="text-texts mb-2">Password</Text>
            <TextInput
              className="bg-accent/30 p-4 rounded-xl text-texts"
              value={password}
              onChangeText={setPassword}
              placeholder="Create a password"
              placeholderTextColor="#666"
              secureTextEntry
            />
          </View>

          <View>
            <Text className="text-texts mb-2">Confirm Password</Text>
            <TextInput
              className="bg-accent/30 p-4 rounded-xl text-texts"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm your password"
              placeholderTextColor="#666"
              secureTextEntry
            />
          </View>

          <Pressable
            onPress={handleSignup}
            className="bg-accent/30 p-4 rounded-xl mt-6"
            style={({ pressed }) => [
              {
                transform: [{ scale: pressed ? 0.98 : 1 }],
                opacity: pressed ? 0.9 : 1,
              },
            ]}
          >
            <Text className="text-xl font-semibold text-texts text-center">Sign Up</Text>
          </Pressable>

          <View className="flex-row justify-center mt-4">
            <Text className="text-texts/70">Already have an account? </Text>
            <Link href="/login" asChild>
              <Pressable>
                <Text className="text-accent font-semibold">Login</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
} 