import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {
  ProductImage,
  ProductList,
  Title,
  Container,
  Price,
  AddToCartButton,
  CartButtonText,
  ContainerProduct,
} from './styles';

export default class Main extends Component {
  state = {
    products: [],
  };

  render() {
    return (
      <Container>
        <ProductList
          data={[
            { key: 'Devin' },
            { key: 'Dan' },
            { key: 'Dominic' },
            { key: 'Jackson' },
            { key: 'James' },
            { key: 'Joel' },
          ]}
          renderItem={({ item }) => (
            <ContainerProduct>
              <ProductImage
                source={{
                  uri:
                    'https://imgcentauro-a.akamaihd.net/230x230/94832202.jpg',
                }}
              />
              <Title>{item.key}</Title>
              <Price>129 R$</Price>
              <AddToCartButton>
                <CartButtonText>Add to cart</CartButtonText>
              </AddToCartButton>
            </ContainerProduct>
          )}
        />
      </Container>
    );
  }
}
