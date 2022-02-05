import { Action, ActionType } from "../actions/index"

export interface MyState {
    items: any;
}
const initialState = {
    items: [],
}

export const reducer = (
    state: MyState = initialState, 
    action: Action
  ) => {
  switch(action.type){
    case ActionType.ALL : {
      state.items = action.payload;
      console.log('all', state.items)
      return {items: action.payload};
    }
    case ActionType.MANUAL : {
      state.items = action.payload;
      console.log('manual', state.items)
      return {items: action.payload};
    }
    case ActionType.TWITTER : {
      state.items = action.payload;
      console.log('twitter', state.items)
      return {items: action.payload};
    }
    case ActionType.INSTA : {
      state.items = action.payload;
      console.log('insta', state.items)
      return {items: action.payload};
    }
    default:
      return state
  }
}