import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

export default class Login extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: `详情-${navigation.getParam('title', 'NULL')}`,
    };
  };
  handleClick = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text>
          title: {JSON.stringify(navigation.getParam('title', 'NULL'))}
        </Text>
      </View>
    );
  }
}
