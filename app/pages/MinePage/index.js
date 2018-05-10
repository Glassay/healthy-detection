import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import FontsSize from '../../res/fonts/size';
import Colors from '../../res/Colors/index';
import IconsSize from '../../res/Icons/size';
import Styles from '../../res/Styles';

class HomePage extends Component {
  static navigationOptions = {
    headerTitle: (
      <Text
        style={{
          color: Colors.white,
          alignSelf: 'center',
          fontSize: FontsSize.large,
          marginLeft: Styles.Width(280),
        }}
      >我的
      </Text>
    ),
    headerStyle: {
      backgroundColor: Colors.primary,
      borderBottomWidth: 0,
    },
    tabBarLabel: '我的',
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name={focused ? 'ios-person' : 'ios-person-outline'}
        size={IconsSize.xlarge}
        style={{ color: Colors.gray3 }}
      />
    ),
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <View>
            <Text style={styles.topBarTitle}>
              哈哈
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  topBar: {
    marginTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  topBarTitle: {
    fontSize: 30,
    color: "black",
  },
});

export default HomePage;
