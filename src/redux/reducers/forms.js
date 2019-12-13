const globalState = {
  formTallent: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
};

const forms = (state = globalState, action) => {
  switch (action.type){
    case 'ADD_FORM_TALENT_PENDING':
      return{
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false,
      };
    case 'ADD_FORM_TALENT_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'ADD_FORM_TALENT_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
      }
    default:
      return state;
  }
}

export default forms