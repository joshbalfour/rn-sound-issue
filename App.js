/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Sound from 'react-native-sound'

Sound.setActive(true)
Sound.enableInSilenceMode(true)
Sound.setCategory('Playback', true)
const sound = new Sound('https://s3.amazonaws.com/data.monstercat.com/blobs/21e6e0336ac16963b063b0ccba5797e1a44fcdf4', undefined, error => {
  if (error) {
    console.log('error loading sound', error)
    return
  }
  sound.play(() => { })
})

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Music should start playing
        </Text>
        <Text style={styles.instructions}>
          To reproduce the issue, hit the home button. The music will stop.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
