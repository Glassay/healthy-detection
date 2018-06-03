import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Badge
} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import FontsSize from '../../res/fonts/size';
import FontsWeight from '../../res/fonts/weight';
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
  state = {
    buttonName: '注册',
    userName: '',
    password: ''
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputArea}>
          <FormLabel>姓名</FormLabel>
          <FormInput
            disabled={false}
            value={this.state.userName}
            onChangeText={(userName) => {this.setState({ userName })}}
          />
          <FormLabel>性别</FormLabel>
          <FormInput
            value={this.state.password}
            onChangeText={(password) => {this.setState({ password })}}
          />
          <FormLabel>年龄</FormLabel>
          <FormInput
            value={this.state.password}
            onChangeText={(password) => {this.setState({ password })}}
          />
          <FormLabel>身高</FormLabel>
          <FormInput
            value={this.state.password}
            onChangeText={(password) => {this.setState({ password })}}
          />
          <FormLabel>体重</FormLabel>
          <FormInput
            value={this.state.password}
            onChangeText={(password) => {this.setState({ password })}}
          />
          <View style={styles.buttonArea}>
            <Badge
              value='修改'
              containerStyle={{
                backgroundColor: Colors.primary,
                width: Styles.Width(200),
                height: Styles.Height(70),
                marginVertical: Styles.Height(40),
              }}
              textStyle={{
                color: Colors.white,
                fontWeight: FontsWeight.bold
              }}
            />
            <Badge
              onPress={this.userLogin}
              value='保存'
              containerStyle={{
                backgroundColor: Colors.primary,
                width: Styles.Width(200),
                height: Styles.Height(70),
                marginVertical: Styles.Height(40),
                marginLeft: Styles.Width(200)
              }}
              textStyle={{
                color: Colors.white,
                fontWeight: FontsWeight.bold
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: Styles.ScreenHeight
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

  buttonArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default HomePage;
