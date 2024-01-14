import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { themeColors } from '../theme';
import RestaurantCard from './RestaurantCard';

function FeatureRow({ title, restaurants, description }) {
  return (
    <View>
      <View className="fle-row justify-between items-start px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-sm text-gray-500">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="overflow-visible pb-5 pt-4"
      >
        {restaurants.map((restaurant, index) => {
          return <RestaurantCard key={index} item={restaurant} />;
        })}
      </ScrollView>
    </View>
  );
}

export default FeatureRow;
