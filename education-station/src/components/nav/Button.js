import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ text, handler }) => (
  <button className="button" type="button" onClick={handler}>{text}</button>
);

export default Button;

Button.defaultProps = {
  text: 'PropTypes.string',
  handler: null,
};

Button.propTypes = {
  text: PropTypes.string,
  handler: PropTypes.func,
};
