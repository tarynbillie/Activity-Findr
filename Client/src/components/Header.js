import React, { Component } from 'react';
import '../styles/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


export default class Header extends Component {
  render() {  
    return (
      <div className='header'>
        <Link to={'/'} className='header__link'> 
          <FontAwesomeIcon className='header__logo header__logo--logoIcon' icon='location-arrow' />
          <h3 className='header__logo header__logo--logoText'>ACTIVITY FINDR</h3>
        </Link>
      </div>
    )
  }
}
