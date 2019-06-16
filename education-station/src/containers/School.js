import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import Teachers from '../components/Teachers';
import { Title } from '../components/content';
import './School.css';
import Button from '../components/nav/Button';

const School = ({ school }) => {
  // STATE
  const [teachersVisible, setTeachersVisible] = useState(false);

  // Handlers & Toggles
  const toggleTeachers = () => {
    setTeachersVisible(!teachersVisible);
  };

  // Render Logic
  const titleClass = !school.IsOpen ? 'school-title--red' : 'school-title';
  const renderStatus = !school.IsOpen ? 'Status: (Closed)' : 'Status: (Open)';

  return (
    <Fragment>
      <div className="school-div">
        <Title title={school.Name} titleClasses={titleClass} />
        {renderStatus}
      </div>
      <p className="school-p">{school.Description}</p>
      <Button handler={toggleTeachers} text="Show/Hide Teachers" />
      {teachersVisible
      && <Teachers teachers={school.Teachers} />
      }
    </Fragment>
  );
};

export default School;

// Id, Name, Description, IsOpen, Teachers = [{}]
School.propTypes = {
  school: PropTypes.shape({
    Id: PropTypes.string,
    Name: PropTypes.string,
    Description: PropTypes.string,
    IsOpen: PropTypes.bool,
    Teachers: PropTypes.array,
  }).isRequired,
};
