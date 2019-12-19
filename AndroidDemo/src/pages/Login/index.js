import React, {Component} from 'react';
import {Text, View, TextInput, ToastAndroid, Button} from 'react-native';
import styles from './styles';

export default class Login extends Component {
  static navigationOptions = {
    title: '登录/注册',
  };
  constructor(props) {
    super(props);
    this.account = null;
    this.password = null;
  }

  handleClick = () => {
    ToastAndroid.show('我被点击了', ToastAndroid.SHORT);
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View>
        <View style={styles.inputContainer}>
          <Text>账号：</Text>
          <TextInput
            placeholder="请输入账号"
            onChangeText={text => (this.account = text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>密码：</Text>
          <TextInput
            placeholder="请输入密码"
            onChangeText={text => (this.password = text)}
          />
        </View>
        <View>
          <Button title="登录" onPress={this.handleClick} />
        </View>
      </View>
    );
  }
}
