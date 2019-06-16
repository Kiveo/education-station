import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Teachers from './Teachers';

const School = ({ school }) => {
  const headerStyle = !school.IsOpen ? { color: 'red' } : null;
  const renderName = `${school.Name} ${!school.IsOpen && '(Closed)'}`;

  return (
    <Fragment>
      <div className="school-div">
        <h4 style={headerStyle} className="school-header">
          {renderName}
        </h4>
        <p className="school-p">{school.Description}</p>
      </div>
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
