import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '_utils/index';
import {getHeight, getWidth} from '_utils/dimensions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {useDetailPoke} from '_store/hooks/usePoke';
import PokeImageSlider from '_components/organisms/PokeImageSlider';

const PokeDetail = ({route}) => {
  const {goBack} = useNavigation();
  const poke = route.params?.poke;
  const {pokeDetail} = useDetailPoke(poke?.name);
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          goBack();
        }}>
        <Icon style={styles.back} size={30} name={'arrow-left'} />
      </TouchableOpacity>
      <Text style={styles.title}>{poke?.name.toUpperCase() ?? 'Name'}</Text>
      <PokeImageSlider />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  back: {
    marginLeft: getWidth(30),
    marginTop: getHeight(20),
  },
  title: {
    alignSelf: 'center',
    color: Colors.TEXT_DARK,
    fontSize: getWidth(22),
    fontWeight: 'bold',
    marginTop: getHeight(20),
  },
});
export default PokeDetail;
