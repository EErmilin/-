import {useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {SharedElementTransition} from 'react-native-shared-element';

const Overlay = () => {
  const position = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(position, {
      toValue: 1,
      duration: 1000,
    }).start();
  }, []);

  return (
    <View style={StyleSheet.absoluteFill}>
      <SharedElementTransition
        start={{
          node: startNode,
          ancestor: startAncestor,
        }}
        end={{
          node: endNode,
          ancestor: endAncestor,
        }}
        position={position}
        animation="move"
        resize="auto"
        align="auto"
      />
    </View>
  );
};

export default Overlay;
