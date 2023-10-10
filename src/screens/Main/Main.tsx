import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useEffect} from 'react';
import Logo_icon from '../../../assets/icons/Logo_icon';
import {colors} from '../../../assets/colors';
import {images} from '../../../assets/images/images';
import QrCode_icon from '../../../assets/icons/QrCode_icon';
import Button from '../../components/base/Button';
import Map_icon from '../../../assets/icons/Map_icon';
import River_icon from '../../../assets/icons/River_icon';
import Home_About_icon from '../../../assets/icons/Home_About_icon';
import Home_Exposition_icon from '../../../assets/icons/Home_Exposition_icon';
import Home_Park_icon from '../../../assets/icons/Home_Park_icon';

const Main = () => {
  const handleLayout = (event: {nativeEvent: {layout: {x: any; y: any}}}) => {
    const {x, y} = event.nativeEvent.layout;
  };

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <ScrollView
        style={styles.container}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <View style={{height: 333}}>
          <Image
            source={images.main_background_houses}
            style={{width: '100%', height: 360, position: 'absolute'}}
          />
          <View style={styles.logo_container} onLayout={handleLayout}>
            <Logo_icon />
            <Text style={styles.logo_title}>
              Русскинской музей Природы и Человека имени Ядрошникова Александра
              Павловича
            </Text>
          </View>

          <View style={styles.header_buttons_container}>
            <View style={styles.header_button_wrapper}>
              <Map_icon />
              <Button text="Карта музея" onPress={() => {}} />
            </View>
            <View style={styles.header_button_wrapper}>
              <QrCode_icon />
              <Button text="Сканировать QR-код" onPress={() => {}} />
            </View>
          </View>
        </View>

        <River_icon />

        <View style={styles.bigButtons_wrapper}>
          <Home_About_icon onPress={() => {}} />
          <Home_Exposition_icon onPress={() => {}} />
          <Home_Park_icon onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
  },
  logo_container: {
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  logo_title: {
    maxWidth: '70%',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    marginLeft: 10,
    color: colors.blue,
    fontSize: 16,
  },
  header_buttons_container: {
    marginTop: 117,
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 20,
  },
  header_button_wrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  bigButtons_wrapper: {
    marginTop: 4,
    gap: 20,
    alignSelf: 'center',
    marginBottom: 100,
  },
});
