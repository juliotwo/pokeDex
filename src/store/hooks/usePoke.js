import {useDispatch, useSelector} from 'react-redux';
import {setListPoke, seDetailPoke} from '_store/actions/pokeActions';

import {
  GetPokemonList,
  GetPokemonDetail,
  GetMoreDataPoke,
} from '_data/apiInterface';
import {useCallback, useEffect} from 'react';

export const usePokeList = (refresh = false) => {
  const pokeList = useSelector((state) => state.poke.pokeList.data);
  const error = useSelector((state) => state.poke.pokeList.error);
  const loading = useSelector((state) => state.poke.pokeList.loading);
  const urlMore = useSelector((state) => state.poke.pokeList.next);
  const dispatch = useDispatch();

  const GetPokeList = useCallback(() => {
    return new Promise((resolve, reject) => {
      GetPokemonList()
        .then((data) => {
          dispatch(
            setListPoke({
              data: data?.results,
              next: data?.next,
              loading: false,
              error: null,
            }),
          );
          resolve(data);
        })
        .catch(() => {
          dispatch(setListPoke({data: null, loading: false, error: true}));
          reject(false);
        });
    });
  }, [dispatch]);

  const GetMoreData = () => {
    return new Promise((resolve, reject) => {
      GetMoreDataPoke(urlMore)
        .then((data) => {
          dispatch(
            setListPoke({
              data: pokeList.concat(data?.results),
              next: data?.next,
              loading: false,
              error: null,
            }),
          );
          resolve(data);
        })
        .catch(() => {
          dispatch(setListPoke({data: null, loading: false, error: true}));
          reject(false);
        });
    });
  };
  useEffect(() => {
    if (refresh || error) {
      GetPokeList();
    }
    return () => {};
  }, [GetPokeList, error, refresh]);
  return {pokeList, error, loading, GetMoreData};
};

export const useDetailPoke = (name) => {
  const pokeDetail = useSelector((state) => state.poke.pokeDetail);

  const dispatch = useDispatch();

  const GetDetailPokemon = useCallback(() => {
    return new Promise((resolve, reject) => {
      GetPokemonDetail(name)
        .then((data) => {
          dispatch(
            seDetailPoke({name, data: data, loading: false, error: null}),
          );
          resolve(data);
        })
        .catch(() => {
          dispatch(seDetailPoke({data: null, loading: false, error: true}));
          reject(false);
        });
    });
  }, [dispatch, name]);
  useEffect(() => {
    if (!pokeDetail[name]) {
      GetDetailPokemon();
    }
    return () => {};
  }, [GetDetailPokemon, name, pokeDetail]);
  return {pokeDetail};
};
