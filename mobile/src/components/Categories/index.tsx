// components
import { FlatList } from 'react-native';
import { Text } from '../Text';

// styled-components
import { Category, Icon } from './styles';

// @mocks
import { categories } from '../../mocks/categories';
import { useState } from 'react';

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;
    setSelectedCategory(category);
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 24 }}
      data={categories}
      keyExtractor={category => category._id}
      renderItem={({ item }) => {
        const isSelected = selectedCategory === item._id;

        return (
          <Category onPress={() => handleSelectCategory(item._id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{item.icon}</Text>
            </Icon>

            <Text
              size={14}
              weight="600"
              opacity={isSelected ? 1 : 0.5}
            >
              {item.name}
            </Text>
          </Category>
        );
      }}
    />
  );
}
