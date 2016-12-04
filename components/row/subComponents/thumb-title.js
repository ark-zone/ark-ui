/**
 * 左侧图片 ＋ 右侧标题＋右侧简介＋右侧信息
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class SubRow extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    const data = this.props;
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={data.onPress} >
        <View style={styles.container}>
          <Image
            source={{
              uri: data.thumb
            }}
            style={styles.thumb}
            resizeMode="cover"
          />

          <View style={styles.rightContainer}>
            <Text style={styles.title} numberOfLines={3}>
              {data.title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>    
    );
  }
}

const styles = StyleSheet.create({
  // 容器
  button: {
    // flex: 1,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderBottomWidth: 1,
    borderColor: '#DDD',
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  // 左侧图片
  thumb: {
    width: 100,
    height: 80,
    margin: 5,
  },
  // 右侧容器
  rightContainer: {
    flex: 1,
    margin: 5,
    flexDirection: 'column'
  },
  // 标题
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});


export default SubRow;