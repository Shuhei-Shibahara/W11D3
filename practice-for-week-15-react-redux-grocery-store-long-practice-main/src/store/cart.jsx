
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
      case REMOVE_ITEM_TO_CART:
        delete newState[action.itemId]
        return newState
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

const REMOVE_ITEM_TO_CART = "REMOVE_ITEM_TO_CART"
export const unpopulateCart = (itemId) => {
  return ({
    type: REMOVE_ITEM_TO_CART,
    itemId
  })
}

export default cartReducer;
