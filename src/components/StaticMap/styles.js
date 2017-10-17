import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: 'absolute',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  buttonContainer: {
    flex: 1, 
    justifyContent: 'flex-end', 
    flexDirection: 'column', 
    paddingBottom: 20,
    width: 150,
    alignItems: 'center',
  }, 
  button: {
    backgroundColor: '#80adf2',
    borderRadius: 20 / 2,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  text: {
    fontFamily: 'Helvetica',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  closeButtonContainer: {
    flex: 1, 
    alignSelf: 'stretch',
    flexDirection: 'column', 
    paddingBottom: 20,
    alignItems: 'center',
    margin: 20,
  }, 
  closeButton: {
    backgroundColor: '#ff6347',
    borderRadius: 20 / 2,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
});


module.exports = styles;