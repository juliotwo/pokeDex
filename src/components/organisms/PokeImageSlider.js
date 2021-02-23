import {isString} from 'lodash';
import React, {useState} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {TabView} from 'react-native-tab-view';
import PokeImage from '_components/molecules/PokeImage';
import {Colors} from '_utils/index';
import {getHeight, windowWidth} from '_utils/dimensions';
import DotTabs from '_components/molecules/DotTab';

// Utils

const initialLayout = {width: Dimensions.get('window').width};

const PokeImageSlider = ({options = []}) => {
  const [index, setIndex] = useState(0);
  const first = options.filter((item) => isString(item));
  const second = first.map((item, index) => {
    const newOpt = {
      key: index,
      image: item,
    };
    return newOpt;
  });
  const routes = second.reverse();
  const renderScene = ({route}) => {
    return <PokeImage item={route} />;
  };
  return (
    <View style={styles.containSlider}>
      <TabView
        renderTabBar={() => <DotTabs index={index} routes={routes} />}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  containSlider: {
    alignSelf: 'center',
    backgroundColor: Colors.BACKGROUND,
    height: getHeight(280),
    marginTop: getHeight(40),
    shadowColor: Colors.LIGHT,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: windowWidth - 30,
  },
});
export default PokeImageSlider;
