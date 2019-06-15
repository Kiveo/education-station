import React, { Component } from 'react';
import { Header, Loader, Title, WelcomeMessage } from '../components/content';
import School from '../components/School';
import './Schools.css';

import { connect } from 'react-redux';

class Schools extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
    }
  }

  render() {
    const { isLoading } = this.state;
    const { schools } = this.props;
    const renderSchools = schools ? schools.map((sch) => (
      <li>
      <School 
        school={sch}
        />
      </li>
    )) : 'Not available'
    
    console.log('plural: ', schools)
    return (
        <div className="schools">
          <section className="schools-section">
            <Header header='Education Station' />
            <WelcomeMessage welcomeClasses="schools-welcome" />
          </section>
          <section className="schools-section" id='school-list'> 
            <Title title='Schools'/>
            {isLoading ? 
              <Loader />
              : renderSchools
            }
          </section>
        </div>
      
    )
  }
}

const mapStateToProps = state => {
  return { schools: state.schools }  
}

const mapDispatchToProps = dispatch => {
  return (dispatch('action'))
};

export default connect(mapStateToProps)(Schools);