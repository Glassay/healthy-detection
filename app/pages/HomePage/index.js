import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import Navigator, { dispatcher } from '../../helper/navigator'
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
    const dispatch = dispatcher(this.props);
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => dispatch(Navigator.navigate('PreTest'))}>
          <Options
            img={require('../../res/Icons/question.png')}
            title="检前自测"
            brief="简单 专业自检"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(Navigator.navigate('Question'))}>
          <Options
            img={require('../../res/Icons/book.png')}
            title="健康问卷"
            brief="健康调查 时刻自知"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(Navigator.navigate('Healthy'))}>
          <Options
            img={require('../../res/Icons/search.png')}
            title="正常指标"
            brief="正常指标 随时对比"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(Navigator.navigate('UnHealthy'))}>
          <Options
            img={require('../../res/Icons/road.png')}
            title="异常指标"
            brief="异常指标 一键获取"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(Navigator.navigate('Archives'))}>
          <Options
            img={require('../../res/Icons/standard.png')}
            title="健康档案"
            brief="实时归档 方便查询"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAF6',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
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
