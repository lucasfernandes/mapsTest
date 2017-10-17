import { takeLatest, call, put } from 'redux-saga/effects';

async function getLocation(formAddress) {

  let apikey = 'AIzaSyBZV38Djr7znaLznQ9OAqwqOd9EoSoSfhQ';
  let address = formAddress.replace(' ', '+');

  try {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apikey}`;
    const response = await fetch(url);
    
    let data = await response.json();
    return data.results[0].geometry.location;
  } catch(error) {
    console.error(error);
  }
}

function* fetchLocations(data) {
 
  try {
    const formData = data.payload.formData;
    const location = yield call(getLocation, formData.address);
    const formLocation = { 
      coordinates: {
        latitude: location.lat,
        longitude: location.lng,
      },
      title: formData.title,
      description: formData.description,
    }

    yield put({ 
      type: 'ADD_ADDRESS_SUCCESS', 
      payload: {
        formLocation
      }
    });

  } catch (error) {
    yield put({ type: 'ADDRESS_FAILED', message: error.message });
  }
}

function* fetchSaga() {
  yield takeLatest('ADD_ADDRESS', fetchLocations)
}

export default fetchSaga;
