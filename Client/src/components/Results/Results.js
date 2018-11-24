import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ResultsCard from './ResultsCard/ResultsCard';
import FilterDropDown from './FilterDropDown/FilterDropDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Results.scss';

class Results extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);


    this.state = {
      formData: [],
      filter: [],
      isData: false,
      filterDropDown: false
    }
    
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value,});
  }

  filterDropDown() {
    this.setState((prevState) => {
      return {filterDropDown: !prevState.filterDropDown};
    });
  }
  
  componentDidMount() {
    fetch('http://localhost:8080/results')
    .then(response => response.json())
    .then((data) => {       
      if (data.businesses[0]){
      this.setState({
        formData: data,
        isData: true
      })
    }
    })
    .catch(err => {
      console.log(err)
    });
  }

  render() {  
    const { filterDropDown, formData, isData} = this.state; 
    
    return (
      <div className='results'>
        {isData ? (
          <button className='results__filterButton' onClick={() => this.filterDropDown()}>
            <FontAwesomeIcon className='results__sliderLogo' icon='sliders-h' />
          </button>
        ) : (
          <div className='results__image results__image--placeholder' >
            <h3 className='results__noResult'>Ooooops! There are no activities in your area</h3>
            <div className='results__logoContainer'>
              <FontAwesomeIcon className='results__logo--logoIcon' icon='location-arrow' />
              <h4 className='results__logo results__logo--logoText'>Activity Findr</h4>
            </div>
          </div>
        )}
      {filterDropDown ? <FilterDropDown {...this.state}/> : null}
      {formData && formData.businesses ? formData.businesses.map((business) => (
        <ResultsCard key={business.name} {...business} />
        )) : null}
      </div>
    )
  }
}

export default withRouter(Results)
