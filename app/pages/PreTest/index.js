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
import { connect } from 'dva';

import FontsSize from '../../res/fonts/size';
import Colors from '../../res/Colors/index';
import IconsSize from '../../res/Icons/size';
import Options from '../../components/Options';
import Styles from '../../res/Styles';
import SingleChecked from '../../components/SingleCheck';
import StairTitle from '../../components/StairTitle';
import SecondTitle from '../../components/SecondTitle';
import FontsWeight from '../../res/fonts/weight';

class PreTest extends React.Component {
  static navigationOptions = {
    headerTitle: (
      <Text
        style={{
          color: Colors.white,
          alignSelf: 'center',
          fontSize: FontsSize.large,
        }}
      >检前自测
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
  handleSubmit = () => {
    this.props.dispatch({
      type: 'test/uploadResult',
      payload: {
        answer1: +this.state.answer1,
        answer2: +this.state.answer2,
        answer3: +this.state.answer3,
        answer4: +this.state.answer4,
        answer5: +this.state.answer5,
        answer6: +this.state.answer6,
        answer7: +this.state.answer7,
        answer8: +this.state.answer8,
        answer9: +this.state.answer9,
        answer10: +this.state.answer10
      }
    })
  }
  render() {
    console.log('value', this.state.answer1);
    return(
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={
            <ThemeProvider>
              <StairTitle title="单选题" />
              <SecondTitle title="1.偶尔睡得不好，第二天上班就受不了，总想继续睡" />
              <RadioButton.Group
                onChange={(checkedValue) => {
                  this.setState({
                    answer1: checkedValue,
                  });
                }}
              >
                <RadioButton
                  text="没有"
                  value="10"
                  checked={this.state.answer1 === '10'}
                />
                <RadioButton
                  text="有, 但程度浅"
                  value="8"
                  checked={this.state.answer1 === '8'}
                />
                <RadioButton
                  text="有, 程度深"
                  value="6"
                  checked={this.state.answer1 === '6'}
                />
                <RadioButton
                  text="有"
                  value="4"
                  checked={this.state.answer1 === '4'}
                />
              </RadioButton.Group>
              <SecondTitle title="2.出行坐飞机起飞降落时感到耳痛、头痛" />
              <RadioButton.Group
                onChange={(checkedValue) => {
                  this.setState({
                    answer2: checkedValue,
                  });
                }}
              >
                <RadioButton
                  text="没有"
                  value="10"
                  checked={this.state.answer2 === '10'}
                />
                <RadioButton
                  text="有, 但程度浅"
                  value="8"
                  checked={this.state.answer2 === '8'}
                />
                <RadioButton
                  text="有, 程度深"
                  value="6"
                  checked={this.state.answer2 === '6'}
                />
                <RadioButton
                  text="有"
                  value="4"
                  checked={this.state.answer2 === '4'}
                />
              </RadioButton.Group>
              <SecondTitle title="3.出行时行走一段路，就觉得腿疼脚痛" />
              <RadioButton.Group
                onChange={(checkedValue) => {
                  this.setState({
                    answer3: checkedValue,
                  });
                }}
              >
                <RadioButton
                  text="没有"
                  value="10"
                  checked={this.state.answer3 === '10'}
                />
                <RadioButton
                  text="有, 但程度浅"
                  value="8"
                  checked={this.state.answer3 === '8'}
                />
                <RadioButton
                  text="有, 程度深"
                  value="6"
                  checked={this.state.answer3 === '6'}
                />
                <RadioButton
                  text="有"
                  value="4"
                  checked={this.state.answer3 === '4'}
                />
              </RadioButton.Group>
              <SecondTitle title="4.因急事跑步，很容易上气不接下气" />
              <RadioButton.Group
                onChange={(checkedValue) => {
                  this.setState({
                    answer4: checkedValue,
                  });
                }}
              >
                <RadioButton
                  text="没有"
                  value="10"
                  checked={this.state.answer4 === '10'}
                />
                <RadioButton
                  text="有, 但程度浅"
                  value="8"
                  checked={this.state.answer4 === '8'}
                />
                <RadioButton
                  text="有, 程度深"
                  value="6"
                  checked={this.state.answer4 === '6'}
                />
                <RadioButton
                  text="有"
                  value="4"
                  checked={this.state.answer4 === '4'}
                />
              </RadioButton.Group>
              <SecondTitle title="5.生物钟被打乱时就非常难受" />
              <RadioButton.Group
                onChange={(checkedValue) => {
                  this.setState({
                    answer5: checkedValue,
                  });
                }}
              >
                <RadioButton
                  text="没有"
                  value="10"
                  checked={this.state.answer5 === '10'}
                />
                <RadioButton
                  text="有, 但程度浅"
                  value="8"
                  checked={this.state.answer5 === '8'}
                />
                <RadioButton
                  text="有, 程度深"
                  value="6"
                  checked={this.state.answer5 === '6'}
                />
                <RadioButton
                  text="有"
                  value="4"
                  checked={this.state.answer5 === '4'}
                />
              </RadioButton.Group>
              <SecondTitle title="6.体检时医生已给出严重的的警告" />
              <RadioButton.Group
                onChange={(checkedValue) => {
                  this.setState({
                    answer6: checkedValue,
                  });
                }}
              >
                <RadioButton
                  text="没有"
                  value="10"
                  checked={this.state.answer6 === '10'}
                />
                <RadioButton
                  text="有, 但程度浅"
                  value="8"
                  checked={this.state.answer6 === '8'}
                />
                <RadioButton
                  text="有, 程度深"
                  value="6"
                  checked={this.state.answer6 === '6'}
                />
                <RadioButton
                  text="有"
                  value="4"
                  checked={this.state.answer6 === '4'}
                />
              </RadioButton.Group>
              <SecondTitle title="7.站不了多久，就支持不住，很想坐下或躺下" />
              <RadioButton.Group
                onChange={(checkedValue) => {
                  this.setState({
                    answer7: checkedValue,
                  });
                }}
              >
                <RadioButton
                  text="没有"
                  value="10"
                  checked={this.state.answer7 === '10'}
                />
                <RadioButton
                  text="有, 但程度浅"
                  value="8"
                  checked={this.state.answer7 === '8'}
                />
                <RadioButton
                  text="有, 程度深"
                  value="6"
                  checked={this.state.answer7 === '6'}
                />
                <RadioButton
                  text="有"
                  value="4"
                  checked={this.state.answer7 === '4'}
                />
              </RadioButton.Group>
              <SecondTitle title="8.蹲一会儿，就脚麻眼花、心悸气急" />
              <RadioButton.Group
                onChange={(checkedValue) => {
                  this.setState({
                    answer8: checkedValue,
                  });
                }}
              >
                <RadioButton
                  text="没有"
                  value="10"
                  checked={this.state.answer8 === '10'}
                />
                <RadioButton
                  text="有, 但程度浅"
                  value="8"
                  checked={this.state.answer8 === '8'}
                />
                <RadioButton
                  text="有, 程度深"
                  value="6"
                  checked={this.state.answer8 === '6'}
                />
                <RadioButton
                  text="有"
                  value="4"
                  checked={this.state.answer8 === '4'}
                />
              </RadioButton.Group>
              <SecondTitle title="9.坐了一段时间，就想倚靠" />
              <RadioButton.Group
                onChange={(checkedValue) => {
                  this.setState({
                    answer9: checkedValue,
                  });
                }}
              >
                <RadioButton
                  text="没有"
                  value="10"
                  checked={this.state.answer9 === '10'}
                />
                <RadioButton
                  text="有, 但程度浅"
                  value="8"
                  checked={this.state.answer9 === '8'}
                />
                <RadioButton
                  text="有, 程度深"
                  value="6"
                  checked={this.state.answer9 === '6'}
                />
                <RadioButton
                  text="有"
                  value="4"
                  checked={this.state.answer9 === '4'}
                />
              </RadioButton.Group>
              <SecondTitle title="10.经常性的便秘" />
              <RadioButton.Group
                onChange={(checkedValue) => {
                  this.setState({
                    answer10: checkedValue,
                  });
                }}
              >
                <RadioButton
                  text="没有"
                  value="10"
                  checked={this.state.answer10 === '10'}
                />
                <RadioButton
                  text="有, 但程度浅"
                  value="8"
                  checked={this.state.answer10 === '8'}
                />
                <RadioButton
                  text="有, 程度深"
                  value="6"
                  checked={this.state.answer10 === '6'}
                />
                <RadioButton
                  text="有"
                  value="4"
                  checked={this.state.answer10 === '4'}
                />
              </RadioButton.Group>
              <Badge
                onPress={this.handleSubmit}
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

export default connect(({ test }) => ({ ...test }))(PreTest);
