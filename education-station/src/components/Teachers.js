import React from 'react';
import PropTypes from 'prop-types';
import Teacher from './Teacher';

const renderTeachers = teachers => (teachers.map(teach => (
  <div className="teacher" key={teach.Id}>
    <Teacher teacher={teach} />
  </div>
)));

const Teachers = ({ teachers }) => (
  <div className="teachers">
    {renderTeachers(teachers)}
  </div>
);

export default Teachers;

Teachers.propTypes = {
  teachers: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
