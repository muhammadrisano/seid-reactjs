const globalState = {
    token: sessionStorage.getItem('token') || null,
    id_user: sessionStorage.getItem('id_user') || null,
    fullname: null,
    isLoading: false,
    isFulfilled: false,
    isRejected: false
};


const users = (state = globalState, action) => {

    switch (action.type) {
        case 'LOGIN_USER_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'LOGIN_USER_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'LOGIN_USER_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                token: action.payload.data.result.token,
                id_user: action.payload.data.result.id_user,
                fullname: action.payload.data.result.fullname,
            };
        case 'GET_USER_iD_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };

        case 'GET_USER_ID_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_USER_ID_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                // userid: action.payload.data.result
            };

        default:
            return state;
    }


}

export default users;