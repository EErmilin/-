import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../../../assets/colors';
import {images} from '../../../assets/images/images';
import {useNavigation} from '@react-navigation/native';

const Exposition = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.block}
          onPress={() => navigation.navigate('Details')}>
          <Image source={images.nature} />
          <Text style={styles.text}>Природа Югры</Text>
        </TouchableOpacity>

        <View style={styles.block}>
          <Image source={images.khanty} />
          <Text style={styles.text}>Тром-аганские ханты</Text>
        </View>

        <View style={styles.block}>
          <Image source={images.russianLive} />
          <Text style={styles.text}>Быт русских старожилов</Text>
        </View>

        <View style={styles.block}>
          <Image source={images.fairyTales} />
          <Text style={styles.text}>Сказки «Жили-были»</Text>
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
    marginVertical: 12,
  },
});
