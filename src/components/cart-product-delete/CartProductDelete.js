import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import { productDeleteFromCart } from '../../redux/actions';

export const CartProductDelete = ({ data }) => {
  const dispatch = useDispatch();
  const { id } = data;

  const handleClick = useCallback((e) => {
    e.preventDefault();
    dispatch(productDeleteFromCart(id));
  }, [dispatch, id]);

  return (
    <FontAwesomeIcon onClick={handleClick} color={'white'} fontSize={'16px'} icon={faClose}/>
  );
};
