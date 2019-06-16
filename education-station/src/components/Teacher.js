import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Students from './Students';

const Teacher = ({ teacher }) => (
  <Fragment>
    <p className="teacher-p">{teacher.Name}</p>
    <Students students={teacher.students} />
  </Fragment>
);

export default Teacher;

// Id, Name, Students = [{}]
Teacher.propTypes = {
  teacher: PropTypes.shape({
    Id: PropTypes.string,
    Name: PropTypes.string,
    Students: PropTypes.array,
  }).isRequired,
};
