import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '_utils/index';

const DotTabs = ({index, routes}) => {
  return (
    <View key={'key' + index} style={styles.container}>
      {routes.map((route, i) => (
        <View
          key={'key' + i}
          style={[styles.dots, index === i && styles.active]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  active: {
    opacity: 1,
  },
  container: {
    alignItems: 'center',
    bottom: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    zIndex: 10,
  },
  dots: {
    backgroundColor: Colors.TEXT_DARK,
    borderRadius: 5,
    height: 10,
    marginHorizontal: 4,
    opacity: 0.3,
    width: 10,
  },
});

export default DotTabs;
