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
import Options from '../../components/Options';
import Styles from '../../res/Styles';

class HomePage extends Component {
  static navigationOptions = {
    headerTitle: (
      <Text
        style={{
          color: Colors.white,
          alignSelf: 'center',
          fontSize: FontsSize.large,
        }}
      >掌上体检
      </Text>
    ),
    headerStyle: {
      backgroundColor: Colors.primary,
      borderBottomWidth: 0,
    },
    tabBarLabel: '首页',
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name={focused ? 'ios-clipboard' : 'ios-clipboard-outline'}
        size={IconsSize.xlarge}
      />
    ),
  }
  render() {
    return (
      <View style={styles.container}>
        <Options
          img={require('../../res/Icons/question.png')}
          title="检前自测"
          brief="简单 专业自检"
        />
        <Options
          img={require('../../res/Icons/book.png')}
          title="健康问卷"
          brief="健康调查 时刻自知"
        />
        <Options
          img={require('../../res/Icons/search.png')}
          title="体检指标"
          brief="正常指标 随时对比"
        />
        <Options
          img={require('../../res/Icons/road.png')}
          title="异常指标"
          brief="异常指标 一键获取"
        />
        <Options
          img={require('../../res/Icons/standard.png')}
          title="健康档案"
          brief="实时归档 方便查询"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAF6',
    display: 'flex',
    flexWrap: 'wrap',
    padding: Styles.Height(40),
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
