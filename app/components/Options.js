import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import FontsSize from '../res/fonts/size';
import FontsWeight from '../res/fonts/weight';
import IconsSize from '../res/Icons/size';
import Colors from '../res/Colors/index';
import Styles from '../res/Styles';

export default class Options extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Image
          style={styles.icons}
          source={this.props.img}
        />
        <Text style={styles.fontSize}>{this.props.title}</Text>
        <Text style={styles.briefInfo}>{this.props.brief}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: Styles.Width(30),
    // margin: Styles.Height(10),
    width: Styles.Width(230),
    height: Styles.Width(230),
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  icons: {
    backgroundColor: Colors.white,
    borderRadius: 50,
    width: Styles.Width(80),
    height: Styles.Height(80),
    marginTop: Styles.Height(34),
  },
  title: {
    fontSize: FontsSize.large,
    fontWeight: FontsWeight.bold,
    color: Colors.black,
    marginTop: Styles.Height(15),
  },
  briefInfo: {
    fontSize: FontsSize.tiny,
    color: Colors.gray1,
    marginTop: Styles.Height(15),
    fontWeight: FontsWeight.bold,
  }
})
