import React from 'react';
import {Text, StyleSheet, Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface LinkComponentProps {
  url?: string;
  screen?: string;
  text: string;
  params?: object;
}

export const LinkComponent: React.FC<LinkComponentProps> = ({
  url,
  screen,
  text,
  params,
}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (url) {
      Linking.openURL(url).catch(err =>
        console.error('An error occurred', err),
      );
    } else if (screen) {
      navigation.navigate(screen, params);
    }
  };

  return (
    <Text style={styles.link} onPress={handlePress}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
