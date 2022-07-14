import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { deleteProductFromCart } from '../../redux/actions';

export const CartProductDelete = ({ data }) => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => dispatch(deleteProductFromCart(data.id)), [dispatch, data.id]);

  return (
    <FontAwesomeIcon onClick={handleClick} color={'white'} fontSize={'16px'} icon={faClose}/>
  );
};
