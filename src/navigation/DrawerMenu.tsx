import { StyleSheet, Text, SafeAreaView, Dimensions, View, Touchable, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import { colors } from '../../assets/colors'
import MenuHome_icon from '../../assets/icons/MenuHome_icon';
import MenuClose_icon from '../../assets/icons/MenuClose_icon';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('screen');

const MENU_DATA: Array<{ icon: React.ReactNode, title: string }> =
  [{
    icon: <MenuHome_icon />,
    title: 'Главная',
  },
  {
    icon: <MenuHome_icon />,
    title: 'О музее',
  },
  {
    icon: <MenuHome_icon />,
    title: 'Фонды',
  },
  {
    icon: <MenuHome_icon />,
    title: 'Экспозиция «Мир священной реки Тром-Аган»',
  },
  {
    icon: <MenuHome_icon />,
    title: 'Музейный этнографический парк «Земля предков»',
  },
  {
    icon: <MenuHome_icon />,
    title: 'Туристический потенциал территории',
  },
]



const DrawerMenu = () => {

  const navigation = useNavigation();

  const drawerComponent = useCallback((item: { icon: React.ReactNode, title: string }) => {
    return (
      <TouchableOpacity key={item.title} style={styles.menu_component_wrapper}>
        {item.icon}
        <Text style={styles.menu_component_text}>
          {item.title}
        </Text>
      </TouchableOpacity>
    )
  }, [navigation])

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.menu_iconClose}>
        <MenuClose_icon />
      </TouchableOpacity>
      <View style={styles.menu_wrapper}>
        {MENU_DATA.map(element => drawerComponent(element))}
      </View>
    </SafeAreaView>
  )
}

export default DrawerMenu

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    height,
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 60
  },
  menu_wrapper: {
    marginTop: 80
  },
  menu_iconClose: {
    position: 'absolute',
    top: 5,
    left: 15,
    marginBottom: 40,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu_component_wrapper: {
    paddingVertical: 10,
    flexDirection: 'row'
  },
  menu_component_text: {
    marginTop: 4,
    width: 220,
    marginLeft: 20,
    color: colors.white,
    fontSize: 18,
    lineHeight: 20,
    textAlignVertical: 'center'
  }
})