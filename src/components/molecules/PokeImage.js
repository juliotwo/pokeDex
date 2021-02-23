import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {getHeight, windowWidth} from '_utils/dimensions';

const PokeImage = ({item}) => {
  return <Image source={{uri: item?.image}} style={styles.image} />;
};
const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    height: getHeight(250),
    resizeMode: 'contain',
    width: windowWidth - 100,
  },
});
export default PokeImage;
