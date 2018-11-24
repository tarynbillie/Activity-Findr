import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import image from './assets/snazzy-image-maps-blue.png';
import '../styles/Home.scss';

class Home extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      term: '',
      location: '',
      radius: '',
      price: '',
      limit: '7'
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  formReset() {
    this.setState({
      term: '',
      location: '',
      radius: '',
      price: ''
    })
  }

  render() {
    return (
      <section className='main'>
          <form className='main__form-card' onSubmit={(event) => {
            this.props.formSubmit(event, this.state);
            this.formReset();
            setTimeout(() => {
              this.props.history.push('/results');
            }, 1500);
          }}>
          <h1>Discover your next activity</h1>
            <div className='categories'>
              <label>
                <h4>What are you looking to do?</h4>
                <input className='activity-input' type='text' name='term' value={this.state.term} onChange={this.handleChange}></input>
              </label>
              <label>
                <h4>Where are you located?</h4>
                <input className='location-input' type='text' name='location' value={this.state.location} onChange={this.handleChange}></input>
              </label>
              <div className='select-row'>
                <label>
                  <h4>Select distance</h4>
                  <select className='distance-select' name='radius' size='1' value={this.state.radius} onChange={this.handleChange}>
                    <option value=''>Select Distance</option>
                    <option value='1000'>1km</option>
                    <option value='2000'>2km</option>
                    <option value='5000'>5km</option>
                    <option value='10000'>10km</option>
                    <option value='15000'>15km</option>
                    <option value='20000'>20km</option>
                  </select>
                </label>
                <label>
                  <h4>What's your budget?</h4>
                  <select className='price-select' name='price' value={this.state.price} size='1' onChange={this.handleChange}>
                    <option value=''>Select Price</option>
                    <option value='1'>$</option>
                    <option value='2'>$$</option>
                    <option value='3'>$$$</option>
                    <option value='4'>$$$$</option>
                  </select>
                </label>
              </div>
            </div>
            <div className='btns'>
              <button className='submit-btn' type='submit'>Show me some activities!</button>
            </div>
          </form>
        <div className='copy'>
        <h5>© Activity Findr 2018. All Rights Reserved.</h5>
        </div>
      </section>
    )
  }
}

export default withRouter(Home);
