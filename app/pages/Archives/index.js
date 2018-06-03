import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';
import { connect } from 'dva';

import FontsSize from '../../res/fonts/size';
import FontsWeight from '../../res/fonts/weight';
import Colors from '../../res/Colors/index';
import IconsSize from '../../res/Icons/size';
import Options from '../../components/Options';
import Styles from '../../res/Styles';

class Archives extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Text
        style={{
          color: Colors.white,
          alignSelf: 'center',
          fontSize: FontsSize.large,
        }}
      >健康档案
      </Text>
    ),
    headerStyle: {
      backgroundColor: Colors.primary,
      borderBottomWidth: 0,
    },
  }
  render() {
    const { healthInfo } = this.props;
    return(
      <FlatList
        style={styles.container}
        showsVerticalScrollIndicator={false}
        keyExtractor={this._keyExtractor}
        // data={unhealthInfo}
        renderItem={({ item }) => (
          <Card title='2018-06-02'>
            <Text style={styles.grade}>60分</Text>
            <Text style={styles.content}>健康状况良好</Text>
          </Card>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAF6',
  },

  grade: {
    fontWeight: 50,
    fontWeight: FontsWeight.bold,
    color: Colors.primary
  },

  content: {
    fontSize: FontsSize.medium,
    color: Colors.gray2,
    fontWeight: FontsWeight.bold
  }
});

export default connect(({ health }) => ({ ...health}))(Archives);
