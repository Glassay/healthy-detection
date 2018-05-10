import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

import FontsSize from '../../res/fonts/size';
import Colors from '../../res/Colors/index';
import IconsSize from '../../res/Icons/size';
import Options from '../../components/Options';
import Styles from '../../res/Styles';
import SingleChecked from '../../components/SingleCheck';
import StairTitle from '../../components/StairTitle';
import SecondTitle from '../../components/SecondTitle';

export default class Question extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Text
        style={{
          color: Colors.white,
          alignSelf: 'center',
          fontSize: FontsSize.large,
        }}
      >健康问卷
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
        <FlatList
          ListHeaderComponent={
            <View>
              <StairTitle title="单选题" />
              <SecondTitle title="1.性别"/>
              <SingleChecked title="男"/>
              <SingleChecked title="女"/>
              <SecondTitle title="2.年龄"/>
              <SingleChecked title="30岁以下"/>
              <SingleChecked title="30~40岁"/>
              <SingleChecked title="40岁以上"/>
              <SecondTitle title="3.性别"/>
              <SingleChecked title="男"/>
              <SingleChecked title="女"/>
              <SecondTitle title="4.年龄"/>
              <SingleChecked title="30岁以下"/>
              <SingleChecked title="30~40岁"/>
              <SingleChecked title="40岁以上"/>
              <SecondTitle title="5.性别"/>
              <SingleChecked title="男"/>
              <SingleChecked title="女"/>
              <SecondTitle title="6.年龄"/>
              <SingleChecked title="30岁以下"/>
              <SingleChecked title="30~40岁"/>
              <SingleChecked title="40岁以上"/>
              <SecondTitle title="7.性别"/>
              <SingleChecked title="男"/>
              <SingleChecked title="女"/>
              <SecondTitle title="8.年龄"/>
              <SingleChecked title="30岁以下"/>
              <SingleChecked title="30~40岁"/>
              <SingleChecked title="40岁以上"/>
              <SingleChecked />
            </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  }
});
