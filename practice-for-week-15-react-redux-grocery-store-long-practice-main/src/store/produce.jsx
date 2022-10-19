import produceData from "../mockData/produce.json"

const produceReducer = (state={}, action) =>{
  const newState = {...Object.freeze(state)};

  switch(action.type){
    case POPULATE:
      action.produce.forEach((item)=>{
        newState[item.id] = item;
      })
      return newState;
    default:
      return newState;
  }
}

const POPULATE = "POPULATE"
export const populateProduce = () =>{
  return ({
    type: POPULATE,
    produce: produceData
  })
}


export default produceReducer;
