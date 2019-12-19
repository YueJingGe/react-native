import React, {Component} from 'react';
import {View, Text, Button, ToastAndroid} from 'react-native';
import styles from './styles';

export default class Home extends Component {
  toLogin = () => {
    this.props.navigation.navigate('Login');
  };
  toDetails = () => {
    this.props.navigation.navigate('Details', {
      itemId: 1,
    });
  };

  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      title: '首页',
      headerRight: () => (
        <Button
          onPress={() => {
            ToastAndroid.show('我被点击了', ToastAndroid.SHORT);
          }}
          title="详情"
        />
      ),
    };
  };

  render() {
    return (
      <View style={styles.homeContainer}>
        <Button title="登录/注册" onPress={this.toLogin} />
        <Text>Home!</Text>
        <Button
          title="Go to Main"
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    );
  }
}
