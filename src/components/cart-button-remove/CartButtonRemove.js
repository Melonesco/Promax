import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import React from 'react';
import { cartDelete } from '../../redux/actions';

export const CartButtonRemove = ({ data }) => {
  const dispatch = useDispatch();
  const { id } = data;

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(cartDelete(id));
  };

  return (
    <FontAwesomeIcon onClick={handleClick} color={'white'} fontSize={'16px'} icon={faClose}/>
  );
};
