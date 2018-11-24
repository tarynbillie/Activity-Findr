import React, { Component } from 'react';
import './FilterDropDown.scss';

export default class FilterDropDown extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      filter: {
        highest: '',
        lowest: '',
      }
    }
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  render() {
    const { businesses } = this.props.formData;

    let categories = [];
    
    businesses.map(business => {
      return business.categories.map(category => {
        return categories.push(category.title)        
      })
    })

    let filteredCategories = categories.filter((item, index) => {
      return categories.indexOf(item) >= index;
    });
    
    return (
      <div className='filterDropDown'>
        <form className='filterDropDown__form'>
          <label className='filterDropDown__sortBy'>
            <h4>Sort By:</h4>
            <button className='filterDropDown__inputHighest' type='submit' name='highest' value={this.state.lowest} onClick={this.handleChange}><span>Highest Rated</span></button>
            <button className='filterDropDown__inputLowest' type='submit' name='lowest' value={this.state.lowest} onClick={this.handleChange}><span>Lowest Rated</span></button>
          </label>
          <label className='filterDropDown__category'>
            <h4>Categories:</h4>
            {filteredCategories.slice(0, 3).map(item => {
              return <p>{item}</p>
            })}
            <button className='filterDropDown__inputMoreCategories'><span>More Categories</span></button>
          </label>
        </form>
      </div>
    )
  }
}
