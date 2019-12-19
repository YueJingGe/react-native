import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

export default class Login extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: `详情-${navigation.getParam('itemId', 'NULL')}`,
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
          itemId: {JSON.stringify(navigation.getParam('itemId', 'NULL'))}
        </Text>
        <Button title="回到首页" onPress={this.handleClick} />
      </View>
    );
  }
}
