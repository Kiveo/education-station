import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const enrolledStyle = {
  width: '1em', height: '1em', background: 'green', borderRadius: '50%', float: 'right', margin: '0 0.5em',
};
const notEnrolledStyle = {
  width: '1em', height: '1em', background: 'red', borderRadius: '50%', float: 'right', margin: '0 0.5em',
};

const Student = ({ student }) => (
  <Fragment>
    {student.Name}
    {student.IsEnrolled ? <div style={enrolledStyle} /> : <div style={notEnrolledStyle} />}
    <hr style={{ height: '0.5em', background: '#FBA28D' }} />
  </Fragment>
);

export default Student;

// Name, Id, IsEnrolled
Student.propTypes = {
  student: PropTypes.shape({
    Name: PropTypes.string,
    Id: PropTypes.string,
    IsEnrolled: PropTypes.bool,
  }).isRequired,
};
