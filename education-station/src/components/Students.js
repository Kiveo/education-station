import React from 'react';
import PropTypes from 'prop-types';
import Student from './Student';

const renderStudents = students => (students && students.map(stud => (
  <div key={stud.Id}>
    <Student student={stud} />
  </div>
)));

const Students = ({ students }) => (
  <div className="students">
    {renderStudents(students)}
  </div>
);

export default Students;

Students.defaultProps = {
  students: [],
};

Students.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.object,
  ),
};
