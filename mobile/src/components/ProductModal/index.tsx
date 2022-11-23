// components
import { FlatList, Modal, } from 'react-native';
import { Text } from '../Text';

// styled-components
import {
  Image,
  CloseBtn,
  ModalBody,
  Header,
  IngredientsContainer,
  Ingredient,
  Footer,
  FooterContainer,
  PriceContainer
} from './styles';

// @types
import { Product } from '../../types/Product';
import { Close } from '../Icons/Close';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  selectedProduct: null | Product
}

export function ProductModal({ visible, onClose, selectedProduct }: ProductModalProps) {
  if (!selectedProduct) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={onClose}
    >
      <Image
        source={{
          //uri: `http://172.16.17.39:3333/uploads/${selectedProduct.imagePath}`
          uri: `http://192.168.0.128:3333/uploads/${selectedProduct.imagePath}`
        }}
      >
        <CloseBtn onPress={onClose}>
          <Close />
        </CloseBtn>
      </Image>

      <ModalBody>
        <Header>
          <Text weight='600' size={24}>{selectedProduct.name}</Text>
          <Text
            color='#666'
            style={{ marginTop: 8 }}
          >
            {selectedProduct.description}
          </Text>
        </Header>

        {selectedProduct.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight='600' color='#666'>Ingredientes</Text>

            <FlatList
              data={selectedProduct.ingredients}
              keyExtractor={ingredient => ingredient._id}
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 16 }}
              renderItem={({ item }) => (
                <Ingredient>
                  <Text>{item.icon}</Text>
                  <Text size={14} color="#666" style={{ marginLeft: 20 }}>{item.name}</Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}
      </ModalBody>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color="#666">Preço</Text>
            <Text weight='600' size={20}>{formatCurrency(selectedProduct.price)}</Text>
          </PriceContainer>

          <Button onPress={() => alert('Adicionar ao pedido')}>
            Adicionar ao pedido
          </Button>
        </FooterContainer>
      </Footer>
    </Modal>
  );
}
