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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'dva';

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
    name: '',
    sex: '',
    age: '',
    high: '',
    weight: '',
    isEdit: true
  }

  onEdit = () => {
    this.setState({
      isEdit: true
    })
  }

  onSave = () => {
    this.props.dispatch({
      type: 'users/uploadUser',
      payload: {
        name: this.state.name,
        sex: this.state.sex,
        age: +this.state.age,
        high: +this.state.high,
        weight: +this.state.weight
      }
    })
    this.setState({
      isEdit: false
    })
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.inputArea}>
            <FormLabel>姓名</FormLabel>
            <FormInput
              editable={this.state.isEdit}
              value={this.state.userName}
              onChangeText={(name) => {this.setState({ name })}}
            />
            <FormLabel>性别</FormLabel>
            <FormInput
              editable={this.state.isEdit}
              value={this.state.password}
              onChangeText={(sex) => {this.setState({ sex })}}
            />
            <FormLabel>年龄</FormLabel>
            <FormInput
              editable={this.state.isEdit}
              value={this.state.password}
              onChangeText={(age) => {this.setState({ age })}}
            />
            <FormLabel>身高</FormLabel>
            <FormInput
              editable={this.state.isEdit}
              value={this.state.password}
              onChangeText={(height) => {this.setState({ height })}}
            />
            <FormLabel>体重</FormLabel>
            <FormInput
              editable={this.state.isEdit}
              value={this.state.password}
              onChangeText={(weight) => {this.setState({ weight })}}
            />
            <View style={styles.buttonArea}>
              <Badge
                onPress={this.onEdit}
                value='修改'
                containerStyle={{
                  backgroundColor: Colors.primary,
                  width: Styles.Width(200),
                  height: Styles.Height(70),
                  marginVertical: Styles.Height(20),
                }}
                textStyle={{
                  color: Colors.white,
                  fontWeight: FontsWeight.bold
                }}
              />
              <Badge
                onPress={this.onSave}
                value='保存'
                containerStyle={{
                  backgroundColor: Colors.primary,
                  width: Styles.Width(200),
                  height: Styles.Height(70),
                  marginVertical: Styles.Height(20),
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
      </KeyboardAwareScrollView>
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

export default connect(({ users }) => ({ ...users}))(HomePage);
