import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsById,
} from '../redux/slices/basketSlice';
import { useDispatch, useSelector } from 'react-redux';

function DishRow({ item,name, description, id, price, image }) {
  const dispatch = useDispatch();

  const basketItems = useSelector((state) => selectBasketItemsById(state, item.id));

  const handleIncrease = () => {
    dispatch(addToBasket({ ...item }));
    // dispatch(addToBasket({ id, name, price, image, description }));
  };
  const handleDecrease = () => {
    dispatch(removeFromBasket({ id:item.id }));
  };
  return (
    <View className="flex-row item-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        className="rounded-3xl"
        style={{ height: 100, width: 100 }}
        source={item.image}
      />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
          <Text className="text-xl capitalize">{item.name}</Text>
          <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="text-gray-700 text-lg font-bold w-[130px]">${item.price}</Text>
          <View className="flex-row items-center">
            {/* minus button */}
            <TouchableOpacity
              onPress={handleDecrease}
              className="p-1 rounded-full"
              disabled={!basketItems.length}
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Minus
                strokeWidth={2}
                height={20}
                width={20}
                stroke={'white'}
              />
            </TouchableOpacity>
            <Text className="px-3">{basketItems.length}</Text>
            {/* plus button */}
            <TouchableOpacity
              onPress={handleIncrease}
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Plus
                strokeWidth={2}
                height={20}
                width={20}
                stroke={'white'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default DishRow;
