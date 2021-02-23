import React from 'react';
import {FlatList} from 'react-native';
import {usePokeList} from '_store/hooks/usePoke';
import PokeItem from '_components/molecules/PokeItem';

const PokeList = () => {
  const {pokeList, loading} = usePokeList(true);

  return (
    <FlatList
      keyExtractor={(item, index) => 'key' + index}
      refreshing={loading}
      data={pokeList}
      renderItem={PokeItem}
    />
  );
};

export default PokeList;
