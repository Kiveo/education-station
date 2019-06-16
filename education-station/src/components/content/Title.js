import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title, titleClasses }) => (
  <h2 className={titleClasses} style={{ textAlign: 'center' }}>{title}</h2>
);

export default Title;

Title.defaultProps = {
  titleClasses: 'title',
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  titleClasses: PropTypes.string,
};
