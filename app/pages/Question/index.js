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
import {
  ThemeProvider,
  Screen,
  // Text,
  Button,
  RadioButton
} from '@blankapp/ui';

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
  state = {
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answer5: '',
    answer6: '',
    answer7: '',
    answer8: '',
    answer9: '',
    answer10: ''
  }
  render() {
    return(
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={
            <ThemeProvider>
              <StairTitle title="单选题" />
              <SecondTitle title="1.性别" />
              <RadioButton.Group
                onChange={(checkedValue) => {
                  this.setState({
                    answer1: checkedValue,
                  });
                }}
              >
                <RadioButton
                  text="男"
                  value="1"
                  checked={this.state.answer1 === '1'}
                />
                <RadioButton
                  text="女"
                  value="2"
                  checked={this.state.answer1 === '2'}
                />
              </RadioButton.Group>
              <SecondTitle title="2.年龄" />
              <RadioButton.Group
                onChange={(checkedValue) => {
                  this.setState({
                    answer2: checkedValue,
                  });
                }}
              >
                <RadioButton
                  text="30岁以下"
                  value="1"
                  checked={this.state.answer2 === '1'}
                />
                <RadioButton
                  text="30~40岁"
                  value="2"
                  checked={this.state.answer2 === '2'}
                />
                <RadioButton
                  text="40岁以上"
                  value="3"
                  checked={this.state.answer2 === '3'}
                />
              </RadioButton.Group>
              <SecondTitle title="3.每周参加几次体育锻炼" />
              <RadioButton.Group
                onChange={(checkedValue) => {
                  this.setState({
                    answer3: checkedValue,
                  });
                }}
              >
                <RadioButton
                  text="0次"
                  value="1"
                  checked={this.state.answer3 === '1'}
                />
                <RadioButton
                  text="1~2次"
                  value="2"
                  checked={this.state.answer3 === '2'}
                />
                <RadioButton
                  text="3次以上"
                  value="3"
                  checked={this.state.answer3 === '3'}
                />
              </RadioButton.Group>
              <SecondTitle title="4.平均每次锻炼时间" />
              <RadioButton.Group
                onChange={(checkedValue) => {
                  this.setState({
                    answer4: checkedValue,
                  });
                }}
              >
                <RadioButton
                  text="30分钟以下"
                  value="1"
                  checked={this.state.answer4 === '1'}
                />
                <RadioButton
                  text="30~60分钟"
                  value="2"
                  checked={this.state.answer4 === '2'}
                />
                <RadioButton
                  text="60分钟以上"
                  value="3"
                  checked={this.state.answer4 === '3'}
                />
              </RadioButton.Group>
              <SecondTitle title="5.晨起是否有倦怠感" />
              <RadioButton.Group
                onChange={(checkedValue) => {
                  this.setState({
                    answer5: checkedValue,
                  });
                }}
              >
                <RadioButton
                  text="没有"
                  value="1"
                  checked={this.state.answer5 === '1'}
                />
                <RadioButton
                  text="偶尔"
                  value="2"
                  checked={this.state.answer5 === '2'}
                />
                <RadioButton
                  text="经常"
                  value="3"
                  checked={this.state.answer5 === '3'}
                />
              </RadioButton.Group>
              <SecondTitle title="6.是否有吃早餐的习惯" />
              <RadioButton.Group
                onChange={(checkedValue) => {
                  this.setState({
                    answer6: checkedValue,
                  });
                }}
              >
                <RadioButton
                  text="是"
                  value="1"
                  checked={this.state.answer6 === '1'}
                />
                <RadioButton
                  text="否"
                  value="2"
                  checked={this.state.answer6 === '2'}
                />
              </RadioButton.Group>
              <SecondTitle title="7.饮食习惯偏向于" />
              <RadioButton.Group
                onChange={(checkedValue) => {
                  this.setState({
                    answer7: checkedValue,
                  });
                }}
              >
                <RadioButton
                  text="荤素搭配"
                  value="1"
                  checked={this.state.answer7 === '1'}
                />
                <RadioButton
                  text="多肉少菜"
                  value="2"
                  checked={this.state.answer7 === '2'}
                />
                <RadioButton
                  text="多菜少肉"
                  value="3"
                  checked={this.state.answer7 === '3'}
                />
              </RadioButton.Group>
              <SecondTitle title="8.是否经常熬夜" />
              <RadioButton.Group
                onChange={(checkedValue) => {
                  this.setState({
                    answer8: checkedValue,
                  });
                }}
              >
                <RadioButton
                  text="没有"
                  value="1"
                  checked={this.state.answer8 === '1'}
                />
                <RadioButton
                  text="经常"
                  value="2"
                  checked={this.state.answer8 === '2'}
                />
                <RadioButton
                  text="偶尔"
                  value="3"
                  checked={this.state.answer8 === '3'}
                />
              </RadioButton.Group>
              <SecondTitle title="9.是否认为自己有足够的睡眠时间" />
              <RadioButton.Group
                onChange={(checkedValue) => {
                  this.setState({
                    answer9: checkedValue,
                  });
                }}
              >
                <RadioButton
                  text="是"
                  value="1"
                  checked={this.state.answer9 === '1'}
                />
                <RadioButton
                  text="否"
                  value="2"
                  checked={this.state.answer9 === '2'}
                />
              </RadioButton.Group>
              <SecondTitle title="10.你更倾向于使用哪种方式保持健康" />
              <RadioButton.Group
                onChange={(checkedValue) => {
                  this.setState({
                    answer10: checkedValue,
                  });
                }}
              >
                <RadioButton
                  text="注意饮食"
                  value="1"
                  checked={this.state.answer10 === '1'}
                />
                <RadioButton
                  text="规范作息"
                  value="2"
                  checked={this.state.answer10 === '2'}
                />
                <RadioButton
                  text="体育锻炼"
                  value="3"
                  checked={this.state.answer10 === '3'}
                />
              </RadioButton.Group>
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
            </ThemeProvider>
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
