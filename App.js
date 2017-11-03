import React from 'react';
import { HomeScene, FeedScene } from './src/scenes';
import { StackNavigator } from 'react-navigation';


const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScene,
    title: 'HOME',
    headerMode: 'float',
    headerTitle: 'HOME',
  },
  Feed: {
    screen: FeedScene,
    title: 'FEED',
    headerMode: 'float',
    headerTitle: 'FEED',
  },
});

export default RootNavigator;
