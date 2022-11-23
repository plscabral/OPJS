import { useState } from 'react';

// components
import { FlatList } from 'react-native';
import { Text } from '../Text';
import { ProductModal } from '../ProductModal';

// styled-components
import {
  ProductContainer,
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
import { Product } from '../../types/Product';

export function Menu() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  function handleOpenModal(product: Product) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        selectedProduct={selectedProduct}
      />

      <FlatList
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        data={products}
        keyExtractor={(product) => product._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => (
          <ProductContainer onPress={() => handleOpenModal(item)}>
            <ProductImage source={{
              //uri: `http://172.16.17.39:3333/uploads/${item.imagePath}`
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
          </ProductContainer>
        )}
      />
    </>
  );
}
