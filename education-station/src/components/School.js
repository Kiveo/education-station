import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Teachers from './Teachers';
import { Title } from './content';
import './School.css';

const School = ({ school }) => {
  const titleClass = !school.IsOpen ? 'school-title--red' : 'school-title';
  const renderStatus = !school.IsOpen ? '(Status: Closed)' : '(Status: Open)';

  return (
    <Fragment>
      <div className="school-div">
        <Title title={school.Name} titleClasses={titleClass} />
        {renderStatus}
      </div>
      <p className="school-p">{school.Description}</p>
      <Teachers teachers={school.Teachers} />
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
