import axios from 'axios';
export const inputAngketTalent = (data) => {
  return {
    type: 'ADD_FORM_TALENT',
    payload: axios.post('http://localhost:4000/angket/talent', data, {
      headers: { "authorization": "jangan-coba-coba" },
    }),
  };
};
export const inputAngketCostumer = (data) => {
  return {
    type: 'ADD_FORM_COSTUMER',
    payload: axios.post('http://localhost:4000/angket/costumer', data, {
      headers: { "authorization": "jangan-coba-coba" },
    }),
  };
};