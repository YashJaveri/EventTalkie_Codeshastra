import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import RNSiriwaveview from 'react-native-siri-wave-view';

export default class Wave extends Component {
  render() {
    return (
      <View style={styles.container}>
      <RNSiriwaveview type={0}
            width={this.props.width}
            height={this.props.height}
            startAnimation={this.props.start}
            stopAnimation={!this.props.start}
            amplitude = {this.props.amplitude}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
