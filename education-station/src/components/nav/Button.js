import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ text, handler, buttonClasses }) => (
  <button className={`button ${buttonClasses}`} type="button" onClick={handler}>{text}</button>
);

export default Button;

Button.defaultProps = {
  text: 'PropTypes.string',
  handler: null,
  buttonClasses: null,
};

Button.propTypes = {
  text: PropTypes.string,
  handler: PropTypes.func,
  buttonClasses: PropTypes.string,
};
