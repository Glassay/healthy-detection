import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';
import {
  Divider,
  Card
} from 'react-native-elements';

import FontsSize from '../../res/fonts/size';
import FontsWeight from '../../res/fonts/weight';
import Colors from '../../res/Colors/index';
import IconsSize from '../../res/Icons/size';
import Options from '../../components/Options';
import Styles from '../../res/Styles';
import unhealthInfo from '../../assets/data/unhealthInfo';

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
  }

  _keyExtractor= (item, index) => {
    return index + item;
  }

  render() {
    return(
      <FlatList
        style={styles.container}
        showsVerticalScrollIndicator={false}
        keyExtractor={this._keyExtractor}
        data={unhealthInfo}
        renderItem={({ item }) => (
          <Card title={item.title}>
            <Text style={styles.content}>{item.content}</Text>
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

  content: {
    fontSize: FontsSize.medium,
    color: Colors.gray2,
    fontWeight: FontsWeight.bold
  }
});
