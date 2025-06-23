import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import AboutScreen from '../screen/AboutScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={drawerNavigationOptions}>
      <Drawer.Screen
        name={MAIN_DRAWER_NAVIGATIONS.ABOUT_SCREEN}
        component={AboutScreen}
        options={screensOptions[MAIN_DRAWER_NAVIGATIONS.ABOUT_SCREEN]}
      />
    </Drawer.Navigator>
  );
}

export const MAIN_DRAWER_NAVIGATIONS = {
  ABOUT_SCREEN: 'about-screen',
} as const;

export type MainDrawerParamList = {
  [MAIN_DRAWER_NAVIGATIONS.ABOUT_SCREEN]: undefined;
};

export const drawerNavigationOptions: DrawerNavigationOptions = {
  // ...
};

type MainDrawerNavigationKeys = keyof typeof MAIN_DRAWER_NAVIGATIONS;

export const screensOptions: Record<
  (typeof MAIN_DRAWER_NAVIGATIONS)[MainDrawerNavigationKeys],
  DrawerNavigationOptions
> = {
  [MAIN_DRAWER_NAVIGATIONS.ABOUT_SCREEN]: {
    // ...
  },
};

export default DrawerNavigator;
