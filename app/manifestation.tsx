import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "expo-router";
import { useLayoutEffect, useState } from "react";
import { Dimensions, FlatList, Pressable, Text, View } from "react-native";

interface Quote {
  id: number;
  text: string;
  author: string;
}

export default function Manifestation() {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState<number[]>([]);
  const { height } = Dimensions.get('window');

  useLayoutEffect(() => {
    navigation.setOptions({ 
      headerShown: false
    });
  }, [navigation]);

  const quotes: Quote[] = [
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
    }
  ];

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  const renderQuote = ({ item: quote }: { item: Quote }) => (
    <View 
      style={{ height: height }}
      className="flex-1 justify-center items-center px-6 bg-background"
    >
      <View className="bg-accent/30 p-8 rounded-3xl w-full h-[80%] justify-center">
        <Text className="text-3xl text-texts text-center mb-8 leading-relaxed">
          "{quote.text}"
        </Text>
        <View className="flex-row justify-between items-center">
          <Text className="text-texts/70 italic text-xl">- {quote.author}</Text>
          <Pressable
            onPress={() => toggleFavorite(quote.id)}
            className="p-2"
          >
            <Ionicons 
              name={favorites.includes(quote.id) ? "heart" : "heart-outline"} 
              size={32} 
              color={favorites.includes(quote.id) ? "#ff4444" : "#666666"}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-background">
      <FlatList
        data={quotes}
        renderItem={renderQuote}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        decelerationRate="fast"
        snapToAlignment="center"
        pagingEnabled
      />
    </View>
  );
}