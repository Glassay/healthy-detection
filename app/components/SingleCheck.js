import React from 'react';
import {
  View,
} from 'react-native';
import {
  CheckBox,
} from 'react-native-elements';

import Colors from '../res/Colors';

export default class SingleCheck extends React.Component {
  state = {
    checked: false,
  }
  handleChecked = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    return(
      <CheckBox
        onPress={this.handleChecked}
        title={this.props.title}
        checked={this.state.checked}
        containerStyle={{
          backgroundColor: "#faffb8",
          borderRadius: 10,
          opacity: 0.5
        }}
      />
    );
  }
}