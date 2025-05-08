import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Favourite() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ 
      headerShown: true,
      title: "Favourite Quotes",
      headerStyle: {
        backgroundColor: '#f0f0f0', // bg-accent/20 equivalent
      },
      headerTintColor: '#000000', // text-texts equivalent
    });
  }, [navigation]);

  // Hardcoded favorite quotes
  const favoriteQuotes = [
    {
      id: 1,
      text: "The best way to predict the future is to create it.",
      author: "Abraham Lincoln"
    },
    {
      id: 2,
      text: "Everything you've ever wanted is on the other side of fear.",
      author: "George Addair"
    },
    {
      id: 3,
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill"
    }
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1 px-4 py-6">
        {favoriteQuotes.map((quote) => (
          <View 
            key={quote.id}
            className="bg-support/30 p-4 rounded-2xl mb-4"
          >
            <Text className="text-lg text-texts mb-2">{quote.text}</Text>
            <View className="flex-row justify-between items-center">
              <Text className="text-texts/70 italic">- {quote.author}</Text>
              <Pressable
                className="p-2"
              >
                <Ionicons 
                  name="heart" 
                  size={24} 
                  color="#ff4444"
                />
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
