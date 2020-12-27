import React from 'react'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import '../index.css';

export const SearchBar = ({ term, handleChange, getInfo, clickInput}) => {
  return (
   
      <div className='flex'>
      <Input 
      className='todo'
      value={term}
      type='text'
      onChange={handleChange}
      onFocus={getInfo}
      
    />
  
    <Button onClick={clickInput}>click</Button>
      </div>
  )
}
