import { Action, ActionType } from "../actions/index"

export interface MyState {
    value: string;
    all: object[];
}
const initialState = {
    value: 'all',
    all: []
}

export const reducer = (
    state: MyState = initialState, 
    action: Action
  ) => {
  switch(action.type){
    case ActionType.ALL : {
      return {...state, all: action.payload};
    }
    case ActionType.MANUAL : {
      console.log('man')
      return {...state, manual: action.payload};
    }
    case ActionType.TWITTER : {
      return {...state, twitter: action.payload};
    }
    case ActionType.INSTA : {
      console.log('insta')
      return {...state, instagram: action.payload};
    }
    case ActionType.VALUE : {
      return {...state, value: action.payload};
    }
    case ActionType.NUMBER : {
      return {...state, number: action.payload}
    }
    default:
      return state
  }
}