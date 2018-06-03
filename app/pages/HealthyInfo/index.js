import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import FontsSize from '../../res/fonts/size';
import Colors from '../../res/Colors/index';
import IconsSize from '../../res/Icons/size';
import Options from '../../components/Options';
import Styles from '../../res/Styles';
import SecondTitle from '../../components/SecondTitle';

export default class HealthyInfo extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Text
        style={{
          color: Colors.white,
          alignSelf: 'center',
          fontSize: FontsSize.large,
        }}
      >正常指标
      </Text>
    ),
    headerStyle: {
      backgroundColor: Colors.primary,
      borderBottomWidth: 0,
    },
  }
  render() {
    return(
      <View style={styles.container}>
        <SecondTitle title='体温' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: Styles.ScreenHeight
  },
});
