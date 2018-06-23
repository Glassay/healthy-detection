import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';
import {
  Card
} from 'react-native-elements';
import { connect } from 'dva';
import moment from 'moment';

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
  componentDidMount() {
    this.props.dispatch({
      type: 'health/getResult'
    })
  }

  _keyExtractor= (item, index) => {
    return index + item;
  }
  render() {
    const { healthInfo } = this.props;
    console.log('health', healthInfo);
    return(
      <FlatList
        style={styles.container}
        keyExtractor={this._keyExtractor}
        showsVerticalScrollIndicator={false}
        keyExtractor={this._keyExtractor}
        data={healthInfo}
        renderItem={({ item }) => (
          <Card title={moment(item.Created).format('LL')}>
            <Text style={styles.grade}>{item.score}分</Text>
            <Text style={styles.content}>{item.result}</Text>
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
    fontWeight: 80,
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
