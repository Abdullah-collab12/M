import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "expo-router";
import { useLayoutEffect, useState } from "react";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Manifestation() {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState<number[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({ 
      headerShown: true,
      title: "Manifestation Quotes",
      headerStyle: {
        backgroundColor: '#f0f0f0', // bg-accent/20 equivalent
      },
      headerTintColor: '#000000', // text-texts equivalent
    });
  }, [navigation]);

  const quotes = [
    {
      id: 1,
      text: "What you think, you become. What you feel, you attract. What you imagine, you create.",
      author: "Buddha"
    },
    {
      id: 2,
      text: "The universe is not outside of you. Look inside yourself; everything that you want, you already are.",
      author: "Rumi"
    },
    {
      id: 3,
      text: "Your thoughts create your reality. Choose them wisely.",
      author: "Unknown"
    },
    {
      id: 4,
      text: "The power to manifest your dreams is within you.",
      author: "Unknown"
    },
    {
      id: 5,
      text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
      author: "Christian D. Larson"
    },
    {
      id: 6,
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      id: 7,
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      id: 8,
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      id: 9,
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    
  ];

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1 px-4 py-6">
        {quotes.map((quote) => (
          <View 
            key={quote.id}
            className="bg-accent/30 p-4 rounded-2xl mb-4"
          >
            <Text className="text-lg text-texts mb-2">{quote.text}</Text>
            <View className="flex-row justify-between items-center">
              <Text className="text-texts/70 italic">- {quote.author}</Text>
              <Pressable
                onPress={() => toggleFavorite(quote.id)}
                className="p-2"
              >
                <Ionicons 
                  name={favorites.includes(quote.id) ? "heart" : "heart-outline"} 
                  size={24} 
                  color={favorites.includes(quote.id) ? "#ff4444" : "#666666"}
                />
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
