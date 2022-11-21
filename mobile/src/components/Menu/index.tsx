// components
import { FlatList } from 'react-native';
import { Text } from '../Text';

// styled-components
import {
  Product,
  ProductImage,
  ProductDetails,
  AddToCartButton,
  Separator
} from './styles';

// @mocks
import { products } from '../../mocks/products';

// utils
import { formatCurrency } from '../../utils/formatCurrency';

// icons
import { PlusCircle } from '../Icons/PlusCircle';

export function Menu() {
  return (
    <FlatList
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      data={products}
      keyExtractor={(product) => product._id}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) => (
        <Product>
          <ProductImage source={{
            uri: `http://192.168.0.128:3333/uploads/${item.imagePath}`
          }} />

          <ProductDetails>
            <Text weight='600'>{item.name}</Text>

            <Text
              size={14}
              color='#666'
              style={{ marginVertical: 8 }}
            >
              {item.description}
            </Text>

            <Text
              size={14}
              weight='600'
            >
              {formatCurrency(item.price)}
            </Text>
          </ProductDetails>

          <AddToCartButton>
            <PlusCircle />
          </AddToCartButton>
        </Product>
      )}
    />
  );
}
