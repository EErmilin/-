import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface IExhibitTitle {
  children: ReactNode;
}

const ExhibitTitle = ({children}: IExhibitTitle) => {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default ExhibitTitle;

const styles = StyleSheet.create({
  text: {
    marginBottom: 22,
    fontSize: 24,
    color: 'black',
    fontWeight: '600',
    fontFamily: 'OzHandicraftCyrillicBT',
  },
});
