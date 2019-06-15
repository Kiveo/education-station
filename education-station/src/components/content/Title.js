import React from 'react';
import PropTypes from 'prop-types';

const Title = ({title}) => {
  return ( 
    <h2 className="title">{title}</h2>
   );
}
 
export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
}