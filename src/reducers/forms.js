export default function forms(state =[], action) {

  switch (action.type) {
    case 'ADD_ADDRESS_SUCCESS':
      return [ ...state, {formLocation: action.payload.formLocation}]
    default:
      return state;
  }    
}