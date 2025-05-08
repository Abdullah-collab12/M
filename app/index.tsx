import { Link, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import './globals.css';




export default function Index() {

  const navigation = useNavigation();


  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Top Section */}
      <View className="h-16 bg-accent/20 items-center justify-center">
        <Text className="text-2xl font-bold text-texts text-center px-4">
          Where you feel Alive Again
        </Text>
      </View>

    {/* Middle Section */}
    <SafeAreaView className="flex-1 items-center justify-center space-y-10 px-6 py-8 flex-col gap-10 ml-5 mr-10">
    <Link href="/manifestation" asChild>
  <Pressable 
    className="w-full bg-accent/30 p-4 rounded-2xl flex-row items-center space-x-4"
    style={({ pressed }) => [
      {
        transform: [{ scale: pressed ? 0.98 : 1 }],
        opacity: pressed ? 0.9 : 1,
      },
    ]}
  >
    <Image 
      source={require('../assets/images/image1.jpg')}
      className="w-16 h-16 rounded-full border-2 border-accent"
    />
    <Text className="text-xl font-semibold text-texts text-center ml-4">
      Manifestation
    </Text>
  </Pressable>
</Link>
        
        <Link href="/favourite" asChild>
        <Pressable 
          className="w-full bg-support/30 p-4 rounded-2xl flex-row items-center space-x-4"
          style={({ pressed }) => [
            {
              transform: [{ scale: pressed ? 0.98 : 1 }],
              opacity: pressed ? 0.9 : 1,
            },
          ]}
        >
          <Image 
            source={require('../assets/images/image2.jpg')}
            className="w-16 h-16 rounded-full border-2 border-support"
          />
          <Text className="text-xl font-semibold text-texts text-center ml-4">Favourites</Text>
        </Pressable></Link>
        

        <Link href="/premium" asChild>
        <Pressable 
          className="w-full bg-accent/30 p-4 rounded-2xl flex-row items-center space-x-4"
          style={({ pressed }) => [
            {
              transform: [{ scale: pressed ? 0.98 : 1 }],
              opacity: pressed ? 0.9 : 1,
            },
          ]}
        >
          <Image 
            source={require('../assets/images/image3.jpg')}
            className="w-16 h-16 rounded-full border-2 border-accent"
          />
          <Text className="text-xl font-semibold text-texts text-center ml-4">Premium Quotes</Text>
        </Pressable></Link>
      </SafeAreaView>

      {/* Bottom Section - Login */}
      <View className="p-4 border-t border-accent/20">
        <Link href="/login" asChild>
          <Pressable 
            className="w-full bg-accent/30 p-4 rounded-2xl"
            style={({ pressed }) => [
              {
                transform: [{ scale: pressed ? 0.98 : 1 }],
                opacity: pressed ? 0.9 : 1,
              },
            ]}
          >
            <Text className="text-xl font-semibold text-texts text-center">Login / Sign Up</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}
