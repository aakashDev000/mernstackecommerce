import { authSubscription } from "./store";
import { ADD_DOC_DATA, ADD_TOKEN, REMOVE_TOKEN } from "./type";

const authDispatch = (state: any, action: { payload: any; type: string }) => {
  switch (action.type) {
    case ADD_DOC_DATA: {
      const { data } = action.payload;
      return {
        ...state,
        docdata: data,
      };
    }

    case REMOVE_TOKEN: {
      return {
        ...state,
        authtoken: null,
      };
    }

    case ADD_TOKEN: {
      const { authtoken } = action.payload;

      return {
        ...state,
        authtoken,
      };
    }
    default: {
      return state;
    }
  }
};

export const authReducer = (data: { type: string; payload: any }) => {
  const response = authDispatch(authSubscription.getValue(), data);
  authSubscription.next(response);
};
