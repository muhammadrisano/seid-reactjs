import axios from 'axios';
export const inputitem = (data) => {
  return {
    type: 'ADD_FORM_TALENT',
    payload: axios.post('http://localhost:4000/item', data, {
      headers: { "authorization": "jangan-coba-coba" },
    }),
  };
};