import React, { MouseEvent } from 'react';
import {supabase } from '../Client';

const ButtonComponent = () => {
  const handleMouseEvent = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { data } = await supabase
    .from('Name')
    .update({ name: 'Name' })
  };


  return <button onClick={handleMouseEvent}>Click me!</button>;
};

export default ButtonComponent;