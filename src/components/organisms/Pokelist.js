import React from 'react';
import {FlatList} from 'react-native';
import {usePokeList} from '_store/hooks/usePoke';
import PokeItem from '_components/molecules/PokeItem';

const PokeList = () => {
  const {pokeList, loading, GetMoreData} = usePokeList(true);
  const handleMore = () => {
    GetMoreData();
  };
  return (
    <FlatList
      keyExtractor={(item, index) => 'key' + index}
      refreshing={loading}
      data={pokeList}
      renderItem={PokeItem}
      onEndReached={handleMore}
    />
  );
};

export default PokeList;
