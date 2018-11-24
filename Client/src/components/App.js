import React, { Component } from 'react';
import '../styles/App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Results from './Results/Results';
import Header from './Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationArrow, faSlidersH } from '@fortawesome/free-solid-svg-icons';
library.add(faLocationArrow, faSlidersH);

export default class App extends Component {
  constructor() {
    super();

    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event, data) {
    event.preventDefault();
    const init = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      }
    };

    fetch('http://localhost:8080/getbusinesses', init)
      .then(response => response.json())
      .then(() => {
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {  
    return (
      <div className="App">
        <Header />        
        <Switch>
          <Route path={'/home'} exact render={() => {
              return <Home formSubmit={this.formSubmit} {...this.state} />
            }
          }
          />
          <Route path={'/results'} render={(props) => {return <Results {...props} /> }} />
          <Route path={'/'} render={() => <Redirect to='/home' />} />
        </Switch>
      </div>
    );
  }
}


