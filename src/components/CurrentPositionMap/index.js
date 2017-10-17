// NOT USED YET

import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

import MapView  from 'react-native-maps';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATTITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATIO;


export default class CurrentPositionMap extends Component{
  constructor(props) {
    super(props)

    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
      markerPosition: {
        latitude: 0,
        longitude: 0,
      },
      initialRegion: null,
    }
  }

  watchID: ?number = null;

  componentDidMount() {
    console.log(`watchID - ${this.watchID}`);

    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude);
      var long = parseFloat(position.coords.longitude);

      
      let initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATTITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }

      this.setState({initialPosition: initialRegion});
      this.setState({markerPosition: initialRegion});
      this.setState({initialRegion: initialRegion});
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})

    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)

      
      var lastRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATTITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }

      this.setState({initialPosition: this.state.initialRegion});
      this.setState({markerPosition: this.state.initialRegion});

      console.warn('mudou coordenada');
    })

    console.log(`watchID - ${this.watchID}`);
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
    console.log(`watchID - ${this.watchID}`);
  }
  render() {
    return(
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.initialPosition}>

          <MapView.Marker
            coordinate={this.state.markerPosition}
          />
        </MapView>
        
      </View>
    );
  }
}

