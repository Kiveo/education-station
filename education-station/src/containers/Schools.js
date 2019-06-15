import React, { Component } from 'react';
import Loader from '../components/content/Loader';
import Header from '../components/content/Header';
import WelcomeMessage from '../components/content/WelcomeMessage';
import Title from '../components/content/Title';
import './Schools.css';
import School from '../components/School';

export default class Schools extends Component {
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
