import { useDispatch, useSelector } from 'react-redux';
import './ProductsBuy.css';
import { cartAdd } from '../../redux/actions';

export const ProductsBuy = ({ item }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cartReducer.cart);
  const isItemInCart = items.some(res => res.text.id === item.id);

  const handleClick = (e) => {
    e.preventDefault();
    if (isItemInCart) {
      return alert('Added');
    } else {
      dispatch(cartAdd(item, item.id));
    }
  };

  return (
    <button className={'products__button'} onClick={handleClick}>Add to cart</button>
  );
};
