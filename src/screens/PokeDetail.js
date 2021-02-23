import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors, StylesGeneric} from '_utils/index';
import {getHeight, getWidth} from '_utils/dimensions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {useDetailPoke} from '_store/hooks/usePoke';
import PokeImageSlider from '_components/organisms/PokeImageSlider';
import PokeAbilitiesList from '_components/organisms/PokeAbilitiesList';

const PokeDetail = ({route}) => {
  const {goBack} = useNavigation();
  const poke = route.params?.poke;
  const {pokeDetail} = useDetailPoke(poke?.name);
  return (
    <SafeAreaView style={StylesGeneric.container}>
      <TouchableOpacity
        testID="bt_back"
        onPress={() => {
          goBack();
        }}>
        <Icon style={styles.back} size={30} name={'arrow-left'} />
      </TouchableOpacity>
      <Text style={styles.title}>{poke?.name.toUpperCase() ?? 'Name'}</Text>
      <PokeImageSlider
        options={
          pokeDetail[poke?.name]
            ? Object.values(pokeDetail[poke?.name]?.detail?.sprites)
            : []
        }
      />
      <PokeAbilitiesList
        data={
          pokeDetail[poke?.name]
            ? pokeDetail[poke?.name]?.detail?.abilities
            : []
        }
      />
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
