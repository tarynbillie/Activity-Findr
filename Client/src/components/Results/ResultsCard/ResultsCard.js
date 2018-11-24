import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarRatingComponent from 'react-star-rating-component';
import ResultsMap from './ResultsMap'
import './ResultsCard.scss';

export default class ResultCard extends Component {
  state = {
    reviews: []
  }

  componentDidMount() {
    const id = {
      bussinessId: this.props.id
    } 
    const init = {
      method: 'POST',
      body: JSON.stringify(id),
      headers: {
        'content-type': 'application/json'
      }
    };
    fetch('http://localhost:8080/getbusinessreviews', init)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          reviews: data
        })
      })
      .catch(err => {
        console.log(err)
      })
    }
  

  render() {   
    const { reviews } = this.state;
  
    return (
      <div className='resultsCard'>
        {this.props.image_url === '' ? 
          <div className='resultsCard__image resultsCard__image--placeholder' >
            <FontAwesomeIcon className='resultsCard__logo--logoIcon' icon='location-arrow' />
            <h4 className='resultsCard__logo resultsCard__logo--logoText'>Activity Findr</h4>
          </div> :
          <img className='resultsCard__image' src={this.props.image_url} alt={this.props.name} />
        }
        <div className='resultsCard__info'>
          <h4 className='resultsCard__business'>{this.props.name}</h4>
          <div className='resultsCard__contact'>
            <div>
              <div className='resultsCard__ratings'>
                <span className='resultsCard__stars'> <StarRatingComponent
                  name="rate2"
                  editing={false}
                  renderStarIcon={() => <span>★</span>}
                  starCount={5}
                  value={this.props.rating}
                /></span>
                <span className='resultsCard__reviews'>{`${this.props.review_count} reviews`}</span>
              </div>
              <div>
                <span className='resultsCard__price'>{this.props.price}</span>

              </div>
            </div>
            <div className='resultsCard__contactInfo'>
              <span>{this.props.phone}</span>
              <span>{this.props.location.address1}</span>
              <span>{this.props.location.city}</span>
            </div>
          </div>
          <div>
            {/* {reviews && reviews.reviews ? reviews.reviews.map((review, index) => (
              <p key={index}>{review.text}</p>
            )) : <p>Be the first to review</p>} */}
            {reviews && reviews.reviews ? reviews.reviews.slice(0, 1).map((review, index) => (
              <p key={index}>{review.text}</p>
            )) : <p>Be the first to review</p>}
          </div>
        </div>
        <ResultsMap {...this.props} />  
      </div>
    )
  }
}
