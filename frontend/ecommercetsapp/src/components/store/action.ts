import { ecommerceReducer } from "./reducer";
import {
  ADD_ITEM_CART,
  ADD_ITEM_THROUGH_CART,
  DELETE_ITEM_CART,
  SET_INITIAL_STATE,
} from "./type";

export const addItemInCart = (id: string, index: number) => {
  ecommerceReducer({ type: ADD_ITEM_CART, payload: { id, index } });
};

export const deleteItemInCart = (id: string, index: number) => {
  ecommerceReducer({ type: DELETE_ITEM_CART, payload: { id, index } });
};

export const addItemsThroughCart = (id: string, index: number) => {
  ecommerceReducer({ type: ADD_ITEM_THROUGH_CART, payload: { id, index } });
};

export const resetCart = () => {
  ecommerceReducer({ type: SET_INITIAL_STATE, payload: {} });
};
