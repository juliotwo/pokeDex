import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const PokeDetail = ({poke = {}}) => {
  return (
    <SafeAreaView>
      <Text>{poke?.name}</Text>
    </SafeAreaView>
  );
};

export default PokeDetail;
