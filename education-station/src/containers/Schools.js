import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Header, Loader, Title, WelcomeMessage,
} from '../components/content';
import School from '../components/School';
import { getSchoolsRequest } from '../redux/actions/schoolActions';
import './Schools.css';

class Schools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getSchoolsRequest());
  }

  render() {
    const { isLoading } = this.state;
    const { schools } = this.props;

    const renderSchools = schools ? schools.map(sch => (
      <div className="school" key={sch.Id}>
        <School school={sch} />
      </div>
    )) : 'Not available';

    return (
      <div className="schools">
        <section className="schools-section">
          <Header header="Education Station" />
          <WelcomeMessage welcomeClasses="schools-welcome" />
        </section>
        <section className="schools-section" id="school-list">
          <Title title="Schools" />
          {isLoading
            ? <Loader />
            : renderSchools
            }
        </section>
      </div>

    );
  }
}

Schools.propTypes = {
  schools: PropTypes.arrayOf(PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Id: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    IsOpen: PropTypes.bool,
    teachers: PropTypes.array,
    dispatch: PropTypes.func,
  })),
};

Schools.defaultProps = {
  schools: [],
};

const mapStateToProps = state => ({ schools: state.schools });

export default connect(mapStateToProps)(Schools);
