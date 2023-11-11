import React from 'react';
import {ScrollView, Text, Image, StyleSheet, View} from 'react-native';
import {images} from '../../../assets/images/images';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../../assets/colors';
import Arrow_right from '../../../assets/icons/Arrow_right';
import Play_btn from '../../../assets/icons/Play_btn';
import ExhibitTitle from '../../navigation/components/ExhibitTitle';
import CustomHeader from '../../navigation/components/CustomHeader';

interface ExHibitProps {
  image: string;
  images: string[];
  description: string;
}

const ExHibit = () => {
  return (
    <>
      <CustomHeader title="История" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
          {/* SLIDER */}
          <View style={styles.slider}>
            <Image source={images.exhibit} />
            <View style={styles.arrow}>
              <Arrow_right />
            </View>
            <View style={styles.dots} />
          </View>
          {/* VOICE */}
          <View style={styles.voiceContainer}>
            <View style={styles.play}>
              <Play_btn />
            </View>
          </View>
          {/* INFO */}
          <View style={styles.infoContainer}>
            <ExhibitTitle>Волк</ExhibitTitle>
            <Text style={styles.infoText}>
              Волк (лат. Canis lupus) относится к семейству псовых. Из всех
              подвидов серого волка одним из самых крупных считается полярный
              волк. Длина тела от 100 до 150 см, масса от 30 до 80 кг. Имеет
              очень острое обоняние, улавливающее запах на расстоянии 1,5 км. В
              качестве одного из ключевых хищников волки играют очень важную
              роль в балансе экосистем. Основу питания волков составляют
              копытные животные: в тайге и тундре — северные олени; в лесной
              зоне — лоси, олени, косули, кабаны. Голодный волк способен съесть
              до 10 кг мяса, но обычная суточная норма 2-6 кг. В голодное время
              не брезгует падалью. Во время охоты волки передвигаются весьма
              бесшумно, чтобы не спугнуть добычу. Из внешних чувств у волка
              лучше всего развит слух, немного хуже — обоняние; зрение
              значительно слабее. При необходимости волк развивает скорость до
              55–60 км/ч и способен делать переходы до 60–80 км за ночь. Волки,
              как правило, живут в стаях, состоящих из 6-10 особей. В стае
              соблюдается строгая иерархия. Вожак стаи почти всегда самец. В
              стае его можно узнать по приподнятому хвосту. Среди самок также
              есть своя волчица - «альфа», которая обычно идет впереди вожака.
              Волки никогда не подстерегают добычу, они загоняют ее небольшими
              группами. Добыча делится между членами стаи соответственно рангу.
              Моногамные животные, на одного самца приходится одна самка. В
              марте-апреле волчица приносит обычно от 4 до 10 детенышей. В
              воспитании и кормлении волчат принимает участие вся стая. В Югре
              численность волка низкая, он передвигается вслед за стадами диких
              северных оленей. Нашествие волков на стойбище - настоящее бедствие
              для оленеводов. Отследить хищника самостоятельно сложно. Днем волк
              прячется, выжидает, а ночью выходит на охоту. Шкуру волка коренные
              жители хранят до 7 лет, ограждая стадо от хищника.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ExHibit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: colors.white,
  },
  scroll: {
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  slider: {},
  arrow: {
    width: 30,
    height: 30,
    backgroundColor: colors.white,
    borderRadius: 15,
    position: 'absolute',
    right: -30 / 2,
    top: 161 / 2,
    transform: [{translateY: -30 / 2}],
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dots: {
    width: 10,
    aspectRatio: 1,
    backgroundColor: colors.blue,
    position: 'absolute',
    bottom: -10,
    left: 300 / 2,
    transform: [{translateY: -10 / 2}],
    borderRadius: 5,
  },
  voiceContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'stretch',
  },
  play: {
    width: 40,
    aspectRatio: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    // opacity: 0.5,
  },
  infoContainer: {
    alignSelf: 'stretch',
    marginTop: 30,
  },
  infoText: {
    fontSize: 16,
    lineHeight: 20,
    marginTop: 22,
  },
});
