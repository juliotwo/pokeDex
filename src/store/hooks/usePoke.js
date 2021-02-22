import {useDispatch, useSelector} from 'react-redux';
import {setListPoke} from '_store/actions/pokeActions';

import {GetPokemonList} from '_data/apiInterface';
import {useCallback, useEffect} from 'react';

export const usePokeList = (refresh = false) => {
  const pokeList = useSelector((state) => state.poke.pokeList.data);
  const error = useSelector((state) => state.poke.pokeList.error);
  const loading = useSelector((state) => state.poke.pokeList.loading);
  const dispatch = useDispatch();

  const GetPokeList = useCallback(() => {
    return new Promise((resolve, reject) => {
      GetPokemonList()
        .then((data) => {
          dispatch(
            setListPoke({data: data?.results, loading: false, error: null}),
          );
          resolve(data);
        })
        .catch(() => {
          dispatch(setListPoke({data: null, loading: false, error: true}));
          reject(false);
        });
    });
  }, [dispatch]);

  useEffect(() => {
    if (refresh || error) {
      GetPokeList();
    }
    return () => {};
  }, [GetPokeList, error, refresh]);
  return {pokeList, error, loading};
};
