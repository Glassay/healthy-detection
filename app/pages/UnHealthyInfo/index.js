import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import FontsSize from '../../res/fonts/size';
import Colors from '../../res/Colors/index';
import IconsSize from '../../res/Icons/size';
import Options from '../../components/Options';
import Styles from '../../res/Styles';

export default class UnHealthyInfo extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Text
        style={{
          color: Colors.white,
          alignSelf: 'center',
          fontSize: FontsSize.large,
        }}
      >异常指标
      </Text>
    ),
    headerStyle: {
      backgroundColor: Colors.primary,
      borderBottomWidth: 0,
    },
    // tabBarLabel: '首页',
  }
  render() {
    return(
      <View>
        <Text>异常指标</Text>
      </View>
    );
  }
}
