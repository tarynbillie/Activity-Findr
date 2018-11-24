import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import './ResultsMap.scss';

const styles = {
 position: 'relative',
 width: '400px',
 height: '300px',
};

export class MapContainer extends Component {

   render() {     
       return (
         <div className='map'>
          <Map 
          className='map'
          google={this.props.google}
          zoom={14}
          style={styles}
          initialCenter={{
            lat: this.props.coordinates.latitude,
            lng: this.props.coordinates.longitude
          }}
          >
          <Marker
            onClick={this.onMarkerClick}
            name={this.props.address}
            />
          </Map>
         </div>
       );
     }
   }
   export default GoogleApiWrapper({
       apiKey: 'AIzaSyC2EcumwNwOfvAR5vlrI6PnqOVlxhMFXa8'
     }) (MapContainer);