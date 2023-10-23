import {createStackNavigator} from '@react-navigation/stack';
import Photo from '../screens/Photo/Photo';

const Stack = createStackNavigator();

const PhotoAppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Camera" component={Photo} />
    </Stack.Navigator>
  );
};

export default PhotoAppNavigation;
