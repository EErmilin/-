import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../../../assets/colors';
import {images} from '../../../assets/images/images';

const Exposition = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.block}>
          <Image source={images.nature} />
          <Text style={styles.text}>Природа Югры</Text>
        </View>

        <View style={styles.block}>
          <Image source={images.khanty} />
          <Text style={styles.text}>Природа Югры</Text>
        </View>

        <View style={styles.block}>
          <Image source={images.russianLive} />
          <Text style={styles.text}>Природа Югры</Text>
        </View>

        <View style={styles.block}>
          <Image source={images.fairyTales} />
          <Text style={styles.text}>Природа Югры</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Exposition;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  scrollContent: {
    paddingHorizontal: 30,
    marginVertical: 60,
  },
  block: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginTop: 12,
  },
});
