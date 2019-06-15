import React from 'react';
import PropTypes from 'prop-types';

const School = ({school}) => {
  return ( 
    <p>{school.name}</p>
   );
}
 
export default School;

School.propTypes = {
  school: PropTypes.shape({
    name: PropTypes.string,
  })
}