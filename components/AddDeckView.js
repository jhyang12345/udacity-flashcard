import React, { Component } from "react";
import { Text, View } from 'react-native'
import { connect } from "react-redux";

class AddDeckView extends Component {
  render() {
    return <Text>AddDeckView</Text>;
  }
}

export default connect()(AddDeckView);
