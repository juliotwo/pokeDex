import {SET_LIST_POKE} from '_store/actions/pokeActions';

import {setToState} from '../actionsStore';

const initialState = {
  pokeList: {
    data: [],
    loading: false,
    error: null,
  },
};

function poke(state = initialState, action) {
  switch (action.type) {
    case SET_LIST_POKE: {
      return setToState(state, {
        pokeList: {
          data: action.payload.data,
          loading: action.payload.loading,
          error: action.payload.error,
        },
      });
    }
    default:
      return state;
  }
}

export {poke};
