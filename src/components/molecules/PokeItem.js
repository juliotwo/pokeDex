import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Colors} from '_utils/index';
import {getHeight, getWidth} from '_utils/dimensions';
import PokeBall from '../../../assets/pokebola.png';
import {navigate} from '_utils/navigationService';
const PokeItem = ({item}) => {
  return (
    <TouchableOpacity
      onPress={() => navigate('PokeDetail', {poke: item})}
      style={styles.contain}>
      <Text style={styles.text}>{item?.name?.toUpperCase()}</Text>
      <Image source={PokeBall} style={styles.pokeBall} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  contain: {
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUND,
    borderRadius: getWidth(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: getWidth(20),
    marginVertical: getHeight(15),
    shadowColor: Colors.LIGHT,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  pokeBall: {
    height: getHeight(35),
    marginRight: getWidth(30),
    resizeMode: 'contain',
    width: getWidth(35),
  },
  text: {
    fontSize: getWidth(20),
    marginLeft: getWidth(20),
    marginVertical: getHeight(20),
  },
});
export default PokeItem;
