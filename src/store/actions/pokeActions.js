import {createAction} from '../actionsStore';

export const SET_LIST_POKE = '@poke/LIST';
export const SET_DETAIL_POKE = '@poke/SET_DETAIL_POKE';

const setListPokeAction = createAction(SET_LIST_POKE);
const setDetailPokeAction = createAction(SET_DETAIL_POKE);

export const setListPoke = ({data, loading, error}) =>
  setListPokeAction({data, loading, error});
export const seDetailPoke = ({name, data, loading, error}) =>
  setDetailPokeAction({name, data, loading, error});
