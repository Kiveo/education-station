import React from 'react';
import PropTypes from 'prop-types';
import './WelcomeMessage.css';

const WelcomeMessage = ({ welcomeClasses }) => (
  <div className={`welcome ${welcomeClasses}`}>
    <p>Every year, we send our best and brightest to school.</p>
    <p>Here, at Education-Station, we give those bright bulbs the opportunity to choose their own path!</p>
    <p>
        Below you will find a selection of schools. 
        Sift through them, find your friends or favorite teachers!
        Then, you can select this year`&apos;`s school with confidence and peace of mind.
    </p>
  </div>
);

export default WelcomeMessage;

WelcomeMessage.defaultProps = {
  welcomeClasses: '',
};

WelcomeMessage.propTypes = {
  welcomeClasses: PropTypes.string,
};
