export function addAddress(formData) {
  return {
    type: 'ADD_ADDRESS',
    payload: {
      formData,
    }
  }
}

export function addressFailed(message) {
  return {
    type: 'ADDRESS_FAILED',
    payload: {
      message,
    }
  }
}