import React, {Component} from 'react';
import {View, Text, Button, ToastAndroid, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

export default class Home extends Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      title: '首页',
      // headerRight: () => (
      //   <Button
      //     // onPress={() => {
      //     //   // ToastAndroid.show('我被点击了', ToastAndroid.SHORT);
      //     //   navigation.navigate('Details', {
      //     //     itemId: 1,
      //     //   });
      //     // }}
      //     title="详情"
      //   />
      // ),
    };
  };

  toLogin = () => {
    this.props.navigation.navigate('Login');
  };
  toDetails = data => {
    this.props.navigation.navigate('Details', {
      title: data,
    });
  };

  render() {
    let itemList = [
      [
        {
          title: '添加试卷',
        },
        {
          title: '试题问答',
        },
        {
          title: '成绩统计',
        },
      ],
      [
        {
          title: '视听空间',
        },
        {
          title: '学习积分',
        },
        {
          title: '建议反馈',
        },
      ],
    ];
    return (
      <View style={styles.homeContainer}>
        <Image style={styles.bannerImage} source={require('../../assets/images/banner.png')} />
        <Text>hello Home!</Text>
        <View style={styles.listContainer}>
          {itemList.map((itemArray, i) => {
            return (
              <View key={i}>
                {itemArray.map(item => {
                  return (
                    <TouchableOpacity
                      key={item.title}
                      onPress={this.toDetails.bind(this, item.title)}>
                      <View key={item.title}>
                        <Text>{item.title}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}
