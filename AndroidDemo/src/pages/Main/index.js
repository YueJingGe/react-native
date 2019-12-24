import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

export default class Main extends Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      title: '我的',
      headerRight: () => (
        <Button
          onPress={() => {
            // ToastAndroid.show('我被点击了', ToastAndroid.SHORT);
            navigation.navigate('Login');
          }}
          title="登录/注册"
        />
      ),
    };
  };

  render() {
    return (
      <View>
        <Text>Main!</Text>
      </View>
    );
  }
}
