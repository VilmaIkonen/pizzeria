import { ADD_PRODUCT, REMOVE_PRODUCT, SEARCH_PRODUCT } from './actions';

const initialState = {
  products: [
    {id: '1', title: 'Quattro formaggio', desc: 'Pizza with four delicious cheese', price: 12},
    {id: '2', title: 'Prosciutto e Fungi', desc: 'Ham & fungi', price: 10},
    {id: '3', title: 'Marinara', desc: 'Tomato and anchovy', price: 9},
    {id: '4', title: 'Diavola', desc: 'Pepperoni and mozzarella', price: 12},
    {id: '5', title: 'Alla mamma', desc: 'Ham, blue cheese and fungi', price: 13}
  ],
  cart: [],
  keyword: '',
};

const shopReducer = (state = initialState, action) => {
  let updatedCart;
  let updatedItemIndex;
  switch (action.type) {
    case SEARCH_PRODUCT:
      const keyword = action.payload;
      /*       const searchResult = state.products.filter((item) =>
        item.title.toLowerCase().includes(keyword)
      );
      return { ...state, searchResult: searchResult }; */
      return { ...state, keyword: keyword };

    case ADD_PRODUCT:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex],
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cart: updatedCart };

    case REMOVE_PRODUCT:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload
      );

      const updatedItem = {
        ...updatedCart[updatedItemIndex],
      };
      updatedItem.quantity--;
      if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
      } else {
        updatedCart[updatedItemIndex] = updatedItem;
      }

      return { ...state, cart: updatedCart };
    default:
      return state;
  }
};

export default shopReducer;
