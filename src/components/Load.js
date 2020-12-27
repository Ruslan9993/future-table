import React from 'react';
import Loader from 'react-loader-spinner';
import '../index.css';
const Load = () => {
  return (
    <div className='flex'>
      <Loader type="Rings" color="#00BFFF" height={80} width={80} />
    </div>
    
  )
}
export default Load;