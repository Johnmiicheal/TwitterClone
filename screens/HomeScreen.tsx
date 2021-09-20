import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Tweet from '../components/Tweet';
import { RootTabScreenProps } from '../types';
import Feed from '../components/Feed';
import NewTweetButton from '../components/NewTweetButton';

import tweets from '../data/tweets';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
     <Feed />
     <NewTweetButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
