import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { categories } from '../constants';

function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.map((category, index) => {
          let isActive = category.id === activeCategory;
          let btnClass = isActive ? ' bg-gray-600' : 'bg-gray-200';
          let textClass = isActive
            ? ' font-semibold text-gray-800'
            : 'text-gray-500';
          return (
            <View key={index} className="flex justify-center items-center mr-6 text-center">
              <TouchableOpacity
                onPress={() => setActiveCategory(category.id)}
                className={'p-1 rounded-full shadow bg-gray-200 ' + btnClass}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={category.image}
                  className={`${isActive ? 'scale-1' : 'scale-[0.7]'} transition-transform duration-300`}
                />
              </TouchableOpacity>
              <Text className={'text-sm w-12 text-center flex items-center justify-center' + textClass}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Categories;
