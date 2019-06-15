import React from 'react';
import PropTypes from 'prop-types';

const Header = ({header}) => {
  return ( 
    <header className="header">
      <h1 className="header-h1">{header}</h1>
    </header>
   );
}
 
export default Header;

Header.propTypes = {
  header: PropTypes.string.isRequired,
}

