import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const ProductImage = styled.Image`
  height: 300px;
  width: 300px;
  background: #eee;
  align-self: center;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

export const Container = styled.View`
  background: #191920;
`;

export const Price = styled.Text`
  align-self: center;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const AddToCartButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
`;

export const CartButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

export const ContainerProduct = styled.View`
  background: #fff;
  padding-bottom: 30px;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: auto;
  padding: 20px;
`;
