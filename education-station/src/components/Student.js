import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Student = ({ student }) => (
  <Fragment>
    {student.Name}
  </Fragment>
);

export default Student;

// Name,
Student.propTypes = {
  student: PropTypes.shape({
    Name: PropTypes.string,
  }).isRequired,
};
