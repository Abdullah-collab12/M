import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "expo-router";
import { useLayoutEffect, useState } from "react";
import { Dimensions, FlatList, Pressable, SafeAreaView, Text, View } from "react-native";

interface Quote {
  id: number;
  text: string;
  author: string;
}

export default function Favorites() {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState<number[]>([]);
  const { height } = Dimensions.get('window');

  useLayoutEffect(() => {
    navigation.setOptions({ 
      headerShown: true,
      title: "Favorite Quotes",
      headerStyle: {
        backgroundColor: '#f0f0f0',
      },
      headerTintColor: '#000000',
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

  const favoriteQuotes = quotes.filter(quote => favorites.includes(quote.id));

  // Approximate header height, adjust as needed
  const headerHeight = 60;
  const statusBarHeight = 20; // Or get dynamically if possible
  const itemHeight = height - headerHeight - statusBarHeight;

  const renderQuote = ({ item: quote }: { item: Quote }) => (
    <View 
      style={{ height: itemHeight }}
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
              name="heart" 
              size={32} 
              color="#ff4444"
            />
          </Pressable>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-background">
      {favoriteQuotes.length > 0 ? (
        <FlatList
          data={favoriteQuotes}
          renderItem={renderQuote}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          snapToInterval={itemHeight}
          decelerationRate="fast"
          snapToAlignment="start" // Changed to start for better snapping with header
          pagingEnabled
        />
      ) : (
        <View className="flex-1 justify-center items-center px-6">
          <Text className="text-xl text-texts/70 text-center">
            No favorite quotes yet. Add some from the Manifestation page!
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
} 