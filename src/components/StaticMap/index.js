import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, Alert, Modal } from 'react-native';

import MapView  from 'react-native-maps';
import styles from './styles';

import { connect } from 'react-redux';

import MyForm from '../MyForm'

// markers format for pins
// const markers = [
//   {
//     coordinates: {
//       latitude: -22.9200375,
//       longitude: -47.0561667,
//     },
//     title: 'teste 1',
//     description: 'Description 1'
//   },
//   {
//     coordinates: {
//       latitude: -22.9083238,
//       longitude: -47.0948206,
//     },
//     title: 'teste 2',
//     description: 'Description 2'
//   },
//   {
//     coordinates: {
//       latitude: -22.863738,
//       longitude: -47.0256387,
//     },
//     title: 'teste 3',
//     description: 'Description 3'
//   },
// ];


class StaticMap extends Component{

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible})
  }

  render(){

    return(
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -22.9200375,
            longitude: -47.0561667,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
        
        { 
          this.props.forms.map((marker, key) => (
          <MapView.Marker
            key={key}
            coordinate={marker.formLocation.coordinates}
            title={marker.formLocation.title}
            description={marker.formLocation.description}
          />
        ))}          
        </MapView>
        <View style={{marginTop: 22}}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}
            >
          <View style={{marginTop: 22}}>
            <View>
              <View style={styles.closeButtonContainer}>
                <TouchableHighlight style={styles.closeButton} onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}>
                  <Text style={styles.text}>Fechar janela</Text>
                </TouchableHighlight>
              </View>

              <MyForm />
            </View>
          </View>
          </Modal>

          <View style={styles.buttonContainer}>
            <TouchableHighlight style={styles.button} onPress={() => {
              this.setModalVisible(true)
            }}>
              <Text style={styles.text}>Novo Local</Text>
            </TouchableHighlight>
          </View>

        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  forms: state.forms,
});

export default connect(mapStateToProps)(StaticMap);