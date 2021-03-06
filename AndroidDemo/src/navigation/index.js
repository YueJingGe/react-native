import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconWithBadge from './IconWithBadge';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Details from '../pages/Details';
import Main from '../pages/Main';

const HomeIconWithBadge = props => {
  return <IconWithBadge {...props} badgeCount={3} />;
};

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Details: {
      screen: Details,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const MainStack = createStackNavigator(
  {
    Main: {
      screen: Main,
    },
    Login: {
      screen: Login,
    },
  },
  {
    initialRouteName: 'Main',
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      title: '首页',
    },
    Main: {
      screen: MainStack,
      title: '我的',
    },
  },
  {
    /* 跨页面共享通用的navigationOptions */
    defaultNavigationOptions: ({navigation}) => ({
      // tabBarIcon: ({focused, horizontal, tintColor}) => {
      //   const {routeName} = navigation.state;
      //   let IconComponent = Ionicons;
      //   let iconName;
      //   // 如果是 Home 添加右上角徽章
      //   if (routeName === 'Home') {
      //     iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      //     IconComponent = HomeIconWithBadge;
      //   } else if (routeName === 'Main') {
      //     iconName = `ios-options`;
      //   }
      //   return <IconComponent name={iconName} size={25} color={tintColor} />;
      // },
      // tabBarOptions: {
      //   activeTintColor: 'tomato',
      //   inactiveTintColor: 'gray',
      // },
    }),
    initialRouteName: 'Home',
  },
);

export default createAppContainer(TabNavigator);
