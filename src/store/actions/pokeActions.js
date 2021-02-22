import {createAction} from '../actionsStore';

export const SET_LIST_POKE = '@poke/LIST';

const setListPokeAction = createAction(SET_LIST_POKE);

export const setListPoke = ({data, loading, error}) =>
  setListPokeAction({data, loading, error});
