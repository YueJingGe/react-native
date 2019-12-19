import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

export default class Main extends Component {
  static navigationOptions = {
    title: '我的',
  };
  toLogin = () => {
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <View>
        <Button title="登录/注册" onPress={this.toLogin} />
        <Text>Main!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
