import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native';
import PokeList from '_components/organisms/Pokelist';
import {StylesGeneric} from '_utils/index';
import {getHeight, getWidth, windowWidth} from '_utils/dimensions';
import LogoPoke from '../../assets/pokedex.png';
const Home = () => {
  return (
    <SafeAreaView style={StylesGeneric.container}>
      <Image source={LogoPoke} style={styles.logo} />
      <PokeList />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    height: getHeight(100),
    resizeMode: 'contain',
    width: windowWidth - getWidth(40),
  },
});
export default Home;
