import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  Modal
} from 'react-native';
import {
  Badge
} from 'react-native-elements';

import FontsSize from '../../res/fonts/size';
import Colors from '../../res/Colors/index';
import IconsSize from '../../res/Icons/size';
import Options from '../../components/Options';
import Styles from '../../res/Styles';
import SingleChecked from '../../components/SingleCheck';
import StairTitle from '../../components/StairTitle';
import SecondTitle from '../../components/SecondTitle';
import FontsWeight from '../../res/fonts/weight';

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
              <SecondTitle title="1.性别" />
              <SingleChecked title="男" />
              <SingleChecked title="女" />
              <SecondTitle title="2.年龄" />
              <SingleChecked title="30岁以下" />
              <SingleChecked title="30~40岁" />
              <SingleChecked title="40岁以上" />
              <SecondTitle title="3.每周参加几次体育锻炼" />
              <SingleChecked title="0次" />
              <SingleChecked title="1-2次" />
              <SingleChecked title="3次以上" />
              <SecondTitle title="4.平均每次锻炼时间" />
              <SingleChecked title="30分钟以下" />
              <SingleChecked title="30到60分钟" />
              <SingleChecked title="60分钟以上" />
              <SecondTitle title="5.晨起是否有倦怠感" />
              <SingleChecked title="没有" />
              <SingleChecked title="偶尔" />
              <SingleChecked title="经常" />
              <SecondTitle title="6.是否有吃早餐的习惯" />
              <SingleChecked title="是" />
              <SingleChecked title="否" />
              <SecondTitle title="7.饮食习惯偏向于" />
              <SingleChecked title="多肉少菜" />
              <SingleChecked title="荤素搭配" />
              <SingleChecked title="多菜少肉" />
              <SecondTitle title="8.是否经常熬夜" />
              <SingleChecked title="没有" />
              <SingleChecked title="经常" />
              <SingleChecked title="偶尔" />
              <SecondTitle title="9.是否认为自己有足够的睡眠时间" />
              <SingleChecked title="是" />
              <SingleChecked title="否" />
              <SecondTitle title="10.你更倾向于使用哪种方式保持健康" />
              <SingleChecked title="注意饮食" />
              <SingleChecked title="规范作息" />
              <SingleChecked title="体育锻炼" />
              <Badge
                onPress={() => Alert.alert(
                  '提交成功',
                )}
                value='提交'
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
