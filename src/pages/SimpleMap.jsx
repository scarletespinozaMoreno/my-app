import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import mark from '../images/mark.png'
const AnyReactComponent = ({ text }) => <div><a href="https://www.google.com/maps/place/Hosteria+Rios+Y+Monta%C3%B1as/@-2.2074193,-79.158533,15z/data=!4m2!3m1!1s0x0:0xb97a7c0fdda76305?sa=X&ved=2ahUKEwiDooXIy6zyAhWKTjABHUAvDKUQ_BIwIXoECF0QBQ">
<img src={mark} alt="rym-google-maps" width="25" height="25" className="img-fluid"/> 
  {text}</a></div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat:-2.2098850990615237,
      lng: -79.1553572647843, 
    },
    zoom: 14
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '45vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyAdUEfnAG4sMYl5bN-iYwWRW7M07fBf2hk"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          markers={this.props.center}
        >
       
          <AnyReactComponent
            lat={-2.2098850990615237}
            lng={-79.1553572647843}
            text="RYM"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
