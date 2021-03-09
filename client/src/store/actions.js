export const ADD_PRODUCT = "ADD_PRODUCT";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const searchProduct = (keyword) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_PRODUCT,
      payload: keyword,
    });
  };
};

export const addProduct = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: product,
    });
  };
};

export const removeProduct = (productId) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_PRODUCT,
      payload: productId,
    });
  };
};
