import React from 'react';
import loader from '../../assets/images/loader.svg';
import './Loader.css';

const Loader = () => {
  return ( 
    <div className="loader">
      <img className="loader-image" src={loader} alt='Loading...' />
    </div>
   );
}
 
export default Loader;