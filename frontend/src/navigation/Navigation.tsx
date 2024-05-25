import React from 'react';

import {CommonActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Favourites from '../screens/Favourites';
import ShoppingList from '../screens/ShoppingList';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({navigation, state, descriptors, insets}) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({route, preventDefault}) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({route, focused, color}) => {
            const {options} = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({focused, color, size: 24});
            }

            return null;
          }}
          getLabelText={({route}: {route: any}) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
      )}>
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({color, size}) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Favs"
        component={Favourites}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({color, size}) => {
            return (
              <Icon name="cards-heart-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={ShoppingList}
        options={{
          tabBarLabel: 'Shopping List',
          tabBarIcon: ({color, size}) => {
            return (
              <Icon name="clipboard-list-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({color, size}) => {
            return <Icon name="cog" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
