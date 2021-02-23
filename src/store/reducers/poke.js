import {SET_DETAIL_POKE, SET_LIST_POKE} from '_store/actions/pokeActions';

import {setToState} from '../actionsStore';

const initialState = {
  pokeList: {
    data: [],
    loading: false,
    error: null,
  },
  pokeDetail: {},
};

function poke(state = initialState, action) {
  switch (action.type) {
    case SET_LIST_POKE: {
      return setToState(state, {
        pokeList: {
          data: action.payload.data,
          loading: action.payload.loading,
          error: action.payload.error,
          next: action.payload.next,
        },
      });
    }
    case SET_DETAIL_POKE: {
      return setToState(state, {
        pokeDetail: {
          ...state.pokeDetail,
          [action.payload.name]: {
            ...state.pokeDetail[action.payload.name],
            detail: action.payload.data,
          },
          error: action.payload.error,
          loading: action.payload.loading,
        },
      });
    }
    default:
      return state;
  }
}

export {poke};
