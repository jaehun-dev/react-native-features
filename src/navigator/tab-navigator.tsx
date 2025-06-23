import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import SettingScreen from '../screen/Setting';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={tabNavigationOptions}>
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={screensOptions[MAIN_TAB_NAVIGATIONS.SETTING_SCREEN]}
      />
    </Tab.Navigator>
  );
}

export const MAIN_TAB_NAVIGATIONS = {
  SETTING_SCREEN: 'setting-screen',
} as const;

export type MainTabParamList = {
  [MAIN_TAB_NAVIGATIONS.SETTING_SCREEN]: undefined;
};

export const tabNavigationOptions: BottomTabNavigationOptions = {
  // ...
};

type MainTabNavigationKeys = keyof typeof MAIN_TAB_NAVIGATIONS;

export const screensOptions: Record<
  (typeof MAIN_TAB_NAVIGATIONS)[MainTabNavigationKeys],
  BottomTabNavigationOptions
> = {
  [MAIN_TAB_NAVIGATIONS.SETTING_SCREEN]: {
    headerShown: true,
    headerTitle: '',
    tabBarIcon: ({focused}) => (focused ? <View /> : <View />),
    tabBarLabel: '',
  },
};
