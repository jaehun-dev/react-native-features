import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';

import HomeScreen from '../screen/HomeScreen';

const Stack = createStackNavigator<AuthStackParamList>();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={stackNavigationOptions}>
      <Stack.Screen
        name={AUTH_NAVIGATIONS.HOME_SCREEN}
        component={HomeScreen}
        options={screensOptions[AUTH_NAVIGATIONS.HOME_SCREEN]}
      />
    </Stack.Navigator>
  );
}

export const AUTH_NAVIGATIONS = {
  HOME_SCREEN: 'home',
} as const;

export type AuthStackParamList = {
  [AUTH_NAVIGATIONS.HOME_SCREEN]: undefined;
};

export const stackNavigationOptions: StackNavigationOptions = {
  // ...
};

type AuthNavigationKeys = keyof typeof AUTH_NAVIGATIONS;

export const screensOptions: Record<
  (typeof AUTH_NAVIGATIONS)[AuthNavigationKeys],
  StackNavigationOptions
> = {
  [AUTH_NAVIGATIONS.HOME_SCREEN]: {
    headerShown: false,
  },
};

export default StackNavigator;
