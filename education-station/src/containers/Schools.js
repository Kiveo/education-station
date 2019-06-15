import React, { Component } from 'react';
import { Header, Loader, Title, WelcomeMessage } from '../components/content';
import School from '../components/School';
import './Schools.css';

import { connect } from 'react-redux';

class Schools extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      schools: [],
    }
  }

  componentDidMount() {
    this.setState({
      schools: [],
    })
  }

  componentDidUpdate() {
    console.log('update: ', this.state)
  }
  
  render() {
    const { isLoading, schools } = this.state;
    const renderSchools = schools ? schools.map((sch) => {
      return (
        <School 
          school={sch}
        />
      )
    }) : 'Not available'
    
    console.log('state sch: ', schools)
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

export default connect(mapStateToProps)(Schools);