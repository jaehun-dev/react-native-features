import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigator/drawer-navigator';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
