
const cartReducer = (state = {}, action) => {
  const newState = { ...Object.freeze(state) };
  switch (action.type) {
    case ADD_ITEMS_TO_CART:
      if (Object.keys(newState).includes(action.item.id.toString())){
        newState[action.item.id].count += 1;
      } else {
        newState[action.item.id] = {
          id: action.item.id,
          count: 1
        }
      }
      return newState;
    default:
      return newState;
  }
}

const ADD_ITEMS_TO_CART= "ADD_ITEMS_TO_CART"
export const populateCart = (item) => {
  return ({
    type: ADD_ITEMS_TO_CART,
    item
  })
}


export default cartReducer;
