import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

import FontsSize from '../res/fonts/size';
import FontsWeight from '../res/fonts/weight';
import Colors from '../res/Colors';
import Styles from '../res/Styles';

export default class StairTitle extends React.Component {
  render() {
    return(
      <Text style={styles.title}>{this.props.title}:</Text>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: Colors.black,
    fontSize: FontsSize.small,
    fontWeight: FontsWeight.bold,
    margin: Styles.Height(15),
  }
})