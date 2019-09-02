const initialState = {
    catList: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
  };
  
  const cat = (state = initialState, action) => {
    switch (action.type) {
      case "CAT_ALL_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "CAT_ALL_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true,
          error: action.payload.data
        };
      case "CAT_ALL_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          catList: action.payload.data
        };
        case "NOTE_ALL_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "NOTE_ALL_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true,
          error: action.payload.data
        };
      case "NOTE_ALL_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          catList: action.payload.data
        };
        case "NOTE_ADD_PENDING":
        return {
          ...state,
          isLoading: true,
          isRejected: false,
          isFulfilled: false
        };
      case "NOTE_ADD_REJECTED":
        return {
          ...state,
          isLoading: false,
          isRejected: true,
          error: action.payload.data
        };
      case "NOTE_ADD_FULFILLED":
        return {
          ...state,
          isLoading: false,
          isFulfilled: true,
          catList: action.payload.data
        };
      default:
        return state;
    }
  };
  
  export default cat;
  