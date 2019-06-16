import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Students from './Students';
import Button from './nav/Button';

const Teacher = ({ teacher }) => {
  // STATE
  const [studentsVisible, setStudentsVisible] = useState(false);

  const showStudents = () => {
    setStudentsVisible(!studentsVisible);
  };

  return (
    <Fragment>
      <Button text={teacher.Name} handler={showStudents} buttonClasses={!studentsVisible ? 'teacher-p' : 'teacher-p--active'} />
      {studentsVisible && <Students students={teacher.Students} />}
    </Fragment>
  );
};

export default Teacher;

// Id, Name, Students = [{}]
Teacher.propTypes = {
  teacher: PropTypes.shape({
    Id: PropTypes.string,
    Name: PropTypes.string,
    Students: PropTypes.array,
  }).isRequired,
};
