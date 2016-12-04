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
            <Text style={styles.title} numberOfLines={2}>
              {data.title}
            </Text>

            <View style={styles.infoContainer}>
            { data.info[0] ? (
              <Text style={styles.infoLeft}>
                <Icon name={data.info[0].icon} />
                <Text> {data.info[0].text} </Text>
              </Text>
            ) : null }

            { data.info[1] ? (
              <Text style={styles[data.info.length === 2 ? 'infoRight' : 'infoCenter']}>
                <Icon name={data.info[1].icon} />
                <Text> {data.info[1].text} </Text>
              </Text>
            ) : null }

            { data.info[2] ? (
              <Text style={styles.infoRight}>
                <Icon name={data.info[2].icon} />
                <Text> {data.info[2].text} </Text>
              </Text>
            ) : null }

            </View>
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
  // 信息容器
  infoContainer: {
    // flex: 1,
    height: 20,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  // 左侧信息
  infoLeft: {
    flex: 1,
    fontSize: 12,
    color: '#AAA',
    // backgroundColor: 'green'
  },
  // 中间信息
  infoCenter: {
    flex: 1,
    fontSize: 12,
    color: '#AAA',
    // backgroundColor:'yellow',
  },
  // 右侧信息
  infoRight: {
    flex: 1,
    fontSize: 12,
    color: '#AAA',
    // backgroundColor: 'red',
    // justifyContent: 'center',
  }
});


export default SubRow;