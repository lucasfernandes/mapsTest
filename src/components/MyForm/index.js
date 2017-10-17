import React,{Component} from 'react';
import { View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';

import t from 'tcomb-form-native'
import styles from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as formActions from '../../actions/forms';

var Form = t.form.Form;

var Person = t.struct({
  title: t.String,        // a required string
  address: t.String,      // an optional string
  description: t.String,  // a required number
  showMe: t.Boolean       // a boolean
});

var options = {
  fields: {
   description: {
      multiline: true,
        stylesheet: {
          ...Form.stylesheet,
          textbox: {
            ...Form.stylesheet.textbox,
            normal: {
              ...Form.stylesheet.textbox.normal,
              height: 100
            },
            error: {
              ...Form.stylesheet.textbox.error,
              height: 100
          }
        }
      }
    },
  }
}

class MyForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: null,
      location: null,
    }
  }

  onPress = () => {
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      this.props.addAddress(this.refs.form.getValue());
    }
  }
  
  
  render() {
    
    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={Person}
          options={options}
        />
        <TouchableHighlight 
          style={styles.button} 
          onPress={this.onPress.bind(this)} 
          underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
        <View>
          <Text>
          {
            (this.props.location) 
            ? `Latitude: ${this.props.location.lat} | Longitude: ${this.props.location.lng}` 
            : 'Address not found'
          }
          </Text>
        </View>
      </View>
    );
  }
}


const mapStateToProps = state => ({
  forms: state.forms,
});

const mapDispatchToProps = dispatch => 
  bindActionCreators(formActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MyForm);
