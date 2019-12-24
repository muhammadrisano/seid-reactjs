import axios from 'axios';
export const inputAngketTalent = (data) => {
  return {
    type: 'ADD_FORM_TALENT',
    payload: axios.post('https://backend.seeds-id.com/angket/talent', data, {
      headers: { "authorization": "jangan-coba-coba" },
    }),
  };
};
export const inputAngketCostumer = (data) => {
  return {
    type: 'ADD_FORM_COSTUMER',
    payload: axios.post('https://backend.seeds-id.com/angket/costumer', data, {
      headers: { "authorization": "jangan-coba-coba" },
    }),
  };
};