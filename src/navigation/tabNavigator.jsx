import { COLORS } from '@/config';
import { HomeScreen, MainScreen } from '@/screens';
import { HomeIcon, SettingsIcon } from '@/shared';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

const Tab = createBottomTabNavigator();

const tabsIcons = {
  Home: (props) => <HomeIcon {...props} />,
  Main: (props) => <SettingsIcon {...props} />,
};

const tabs = [
  {
    name: 'Main',
    component: MainScreen,
    label: 'Main',
  },
  {
    name: 'Home',
    component: HomeScreen,
    label: 'Home',
  },
];

const BarIcon = ({ color, name, ...reset }) => {
  const Icon = tabsIcons[name];
  return <Icon color={color} {...reset} />;
};

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color }) => <BarIcon name={route.name} color={color} />,
        tabBarActiveTintColor: COLORS.PRIMARY,
        tabBarInactiveTintColor: COLORS.SECONDARY,
        tabBarStyle: [
          { backgroundColor: COLORS.BUTTON_TEXT },
          { borderTopWidth: 1, borderTopColor: COLORS.BACKGROUND },
        ],
      })}
    >
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        {tabs.map(({ name, component, label }) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={component}
              options={{
                title: label,
              }}
            />
          );
        })}
      </Tab.Group>
    </Tab.Navigator>
  );
};
