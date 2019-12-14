import axios from 'axios';
export const inputAngketTalent = (data) => {
  return {
    type: 'ADD_FORM_TALENT',
    payload: axios.post('http://backendseid.muhammadrisano.online/angket/talent', data, {
      headers: { "authorization": "jangan-coba-coba" },
    }),
  };
};
export const inputAngketCostumer = (data) => {
  return {
    type: 'ADD_FORM_COSTUMER',
    payload: axios.post('http://backendseid.muhammadrisano.online/angket/costumer', data, {
      headers: { "authorization": "jangan-coba-coba" },
    }),
  };
};