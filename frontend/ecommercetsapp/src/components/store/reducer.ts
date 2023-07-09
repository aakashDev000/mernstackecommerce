import { ecommercSubscription } from "./store";
import { ADD_ITEM_CART, ADD_ITEM_THROUGH_CART, DELETE_ITEM_CART } from "./type";

const totalSum = (cartList: Array<any>) => {
  return cartList.map((item: any) => {
    const { count, prize } = item;
    let productprize = item.productprize;

    if (!item.productprize) {
      productprize = prize;
    }

    const slicePrize = productprize.slice(1);
    const prizeSum = Number(slicePrize) * Number(count);
    return {
      ...item,
      prize: `$${prizeSum}`,
      productprize,
    };
  });
};

const ecommerceDispatch = (
  state: any,
  action: { payload: any; type: string }
) => {
  switch (action.type) {
    case ADD_ITEM_CART: {
      const { sellingItemList, cartItemList } = state;
      const { index, id } = action.payload;

      const addItem = sellingItemList[index];

      if (addItem.uniqId !== id) {
        return state;
      }

      if (addItem.count === 0) {
        return state;
      }

      sellingItemList[index] = { ...addItem, count: addItem.count - 1 };

      const cartItemFindIndex = cartItemList.findIndex(
        (i: any) => i.uniqId === addItem.uniqId
      );

      const cartItem =
        cartItemFindIndex > -1
          ? {
              ...cartItemList[cartItemFindIndex],
              count: cartItemList[cartItemFindIndex].count + 1,
            }
          : { ...addItem, count: 1 };

      let cartList: any = cartItemList;

      if (cartItemFindIndex > -1) {
        cartList[cartItemFindIndex] = cartItem;
      } else {
        cartList = [...cartItemList, { ...cartItem }];
      }

      const calculateCartList = totalSum(cartList);

      return {
        ...state,
        sellingItemList,
        cartItemList: calculateCartList,
      };
    }

    case DELETE_ITEM_CART: {
      const { sellingItemList, cartItemList } = state;
      const { index, id } = action.payload;

      const deleteItem = cartItemList[index];

      if (deleteItem.uniqId !== id) {
        return state;
      }

      if (deleteItem.count <= 0) {
        return state;
      }

      let cartConditionBasedList = cartItemList;

      if (deleteItem.count - 1 <= 0) {
        const deltedItemCartList = cartItemList.filter(
          (item: any) => item.uniqId !== id
        );
        cartConditionBasedList = deltedItemCartList;
      } else {
        cartConditionBasedList[index] = {
          ...deleteItem,
          count: deleteItem.count - 1,
        };
      }

      const sellingItemIndex = sellingItemList.findIndex(
        (item: any) => item.uniqId === deleteItem.uniqId
      );

      const sellingItem = sellingItemList[sellingItemIndex];

      sellingItemList[sellingItemIndex] = {
        ...sellingItem,
        count: sellingItem.count + 1,
      };

      const calculateCartList = totalSum(cartConditionBasedList);

      return {
        ...state,
        cartItemList: calculateCartList,
        sellingItemList,
      };
    }

    case ADD_ITEM_THROUGH_CART: {
      const { sellingItemList, cartItemList } = state;
      const { index, id } = action.payload;

      const cartItem = cartItemList[index];

      if (cartItem.uniqId !== id) {
        return state;
      }

      const sellingItemFindIndex = sellingItemList.findIndex(
        (item: any) => item.uniqId === cartItem.uniqId
      );

      if (sellingItemList[sellingItemFindIndex].count <= 0) {
        return state;
      }

      sellingItemList[sellingItemFindIndex] = {
        ...sellingItemList[sellingItemFindIndex],
        count: sellingItemList[sellingItemFindIndex].count - 1,
      };

      cartItemList[index] = { ...cartItem, count: cartItem.count + 1 };

      const calculateCartList = totalSum(cartItemList);

      return { ...state, sellingItemList, cartItemList: calculateCartList };
    }

    default: {
      return state;
    }
  }
};

export const ecommerceReducer = (data: { type: string; payload: any }) => {
  const response = ecommerceDispatch(ecommercSubscription.getValue(), data);
  ecommercSubscription.next(response);
};
