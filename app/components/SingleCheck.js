import React from 'react';
import {
  View,
} from 'react-native';
import {
  CheckBox,
} from 'react-native-elements';

// import StairTitle from './StairTitle';

export default class SingleCheck extends React.Component {
  state = {
    checked: false,
  }
  render() {
    return(
      <View>
        <CheckBox
          title={this.props.title}
          checked={this.state.checked}
        />
      </View>
    );
  }
}