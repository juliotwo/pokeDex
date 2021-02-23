import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import PokeAbility from '_components/molecules/PokeAbility';
import {Colors} from '_utils/index';
import {getHeight, getWidth} from '_utils/dimensions';

const PokeAbilitiesList = ({data}) => {
  return (
    <FlatList
      keyExtractor={(item, index) => 'key' + index}
      data={data}
      renderItem={PokeAbility}
      ListHeaderComponent={() => <Text style={styles.title}>Habilidades</Text>}
    />
  );
};
const styles = StyleSheet.create({
  title: {
    color: Colors.TEXT_DARK,
    fontSize: getWidth(22),
    fontWeight: 'bold',
    marginHorizontal: getWidth(30),
    marginTop: getHeight(20),
  },
});

export default PokeAbilitiesList;
