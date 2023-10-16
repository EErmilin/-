import {createStackNavigator} from '@react-navigation/stack';
import About from '../screens/About/About';
import Photo from '../screens/Photo/Photo';

const Stack = createStackNavigator();

const PhotoAppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="PhotoScreen">
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Camera" component={Photo} />
    </Stack.Navigator>
  );
};

export default PhotoAppNavigation;
