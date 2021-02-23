import React, {useState} from 'react';
import {View, Dimensions} from 'react-native';
import {TabView} from 'react-native-tab-view';
import PokeImage from '_components/molecules/PokeImage';

// Utils

const initialLayout = {width: Dimensions.get('window').width};
const DefaultImage = '';

const renderScene = ({route}) => {
  return <PokeImage />;
};

const PokeImageSlider = ({options, renderScene}) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState(options);

  return (
    <TabView
      renderTabBar={() => <View />}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};
PokeImageSlider.defaultProps = {
  options: [
    {
      key: 'first',
      title: 'Default First',
      description: 'Default description',
      image: DefaultImage,
    },
    {
      key: 'second',
      title: 'Default Second',
      description: 'Default description',
      image: DefaultImage,
    },
    {
      key: 'third',
      title: 'Default Third',
      description: 'Default description',
      image: DefaultImage,
    },
  ],
  renderScene: renderScene,
};

export default PokeImageSlider;
