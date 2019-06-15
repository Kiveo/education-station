import React, { Component } from 'react';
import Header from '../components/content/Header';
import WelcomeMessage from '../components/WelcomeMessage';
import fetchSchools from './API/fetchSchools';

export default class Schools extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      schools: [],
    }
  }

  fetchSchoolsRequest = async () => {
    const schoolsResponse = await fetchSchools();
    if (schoolsResponse.ok) {
      this.setState({
        schools: schoolsResponse.schools,
        isLoading: false,
      })
    } 
  }
  
  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    this.fetchSchoolsRequest()
  }
  
  render() {
    return (
      <div>
        <Header header='Welcome Back To School!' />
        <WelcomeMessage />
        <section id='school-list'> 
          
        </section>
      </div>
    )
  }
}
