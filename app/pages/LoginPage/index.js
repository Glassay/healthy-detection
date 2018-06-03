import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import { connect } from 'dva';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Badge
} from 'react-native-elements';
import React from 'react';

import Navigator, { dispatcher } from '../../helper/navigator';
import Colors from '../../res/Colors';
import FontsSize from '../../res/fonts/size';
import FontsWeight from '../../res/fonts/weight';
import Styles from '../../res/Styles';
import { ConnectedRouter } from 'react-router-redux';

class LoginPage extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Text
        style={{
          color: Colors.white,
          fontSize: FontsSize.large,
          marginLeft: Styles.Width(240),
        }}
      >登录页面
      </Text>
    ),
    headerStyle: {
      backgroundColor: Colors.primary,
      borderBottomWidth: 0,
    },
  }
  state = {
    buttonName: '注册',
    userName: '',
    password: ''
  }

  render() {
    const dispatch = dispatcher(this.props);
    return(
      <View style={styles.container}>
        <View style={styles.inputArea}>
          <FormLabel>手机号</FormLabel>
          <FormInput
            value={this.state.userName}
            onChangeText={(userName) => {this.setState({ userName })}}
          />
          <FormLabel>密码</FormLabel>
          <FormInput
            value={this.state.password}
            onChangeText={(password) => {this.setState({ password })}}
          />
          <View style={styles.buttonArea}>
            <Badge
              value='注册'
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
              value='登录'
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

  inputArea: {
    marginTop: Styles.Height(200),
  },

  buttonArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default connect(({ users }) => ({ ...users }))(LoginPage)
