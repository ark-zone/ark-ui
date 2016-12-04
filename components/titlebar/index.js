/**
 * 标题栏
 * <App backgroundColor="red" color="white" title="Title" />
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // 用户传递过来的自定义颜色
    const customStyle = Object.assign({
      title: 'TitleBar',
      backgroundColor: 'red',
      fontColor: 'white',
    }, this.props);

    return (
      <View>
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="light-content"
        />
        <View
          style={[styles._statusbarView, {
            backgroundColor: customStyle.backgroundColor
          }]} />
        <View
          style={[styles.boxView, {
            backgroundColor: customStyle.backgroundColor,
          }]}>
          {this._renderLeftButton()}
          {this._renderTitle(customStyle.title, customStyle.fontColor)}
          {this._renderRightButton()}
        </View>
      </View>
    )
  }


  /**
   * 左右按钮占位符
   * @return {[type]} [description]
   */
  _emptyButtonView() {
    return (
      <View style={styles.emptyButtonView} />
    )
  }

  /**
   * 渲染右边按钮
   * @return {[type]} [description]
   */
  _renderRightButton() {
    const { rightButton } = this.props;
    if (!rightButton) {
      return this._emptyButtonView();
    }
    return this._renderButton(rightButton);
  }

  _renderButton(opts) {
    return (
      <TouchableOpacity
        style={styles.Button}
        onPress={opts.onPress}>
        <Icon name={opts.icon} size={20} color={opts.color || 'white'}/>
      </TouchableOpacity>
    )
  }

  _renderLeftButton() {
    const { leftButton } = this.props;
    if (!leftButton) {
      return this._emptyButtonView()
    }
    return this._renderButton(leftButton);
  }

  _renderTitle(title, color) {
    return (
      <View
        style={styles.titleView}>
        <Text
          style={[styles.titleText, { color }]}
          numberOfLines={1}>
          {title}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // 一个高度20的空view,用于隔离于顶部的距离
  _statusbarView: {
    height: 20,
  },
  emptyButtonView: {
    width: 40,
    height: 40,
  },
  // 标题栏
  boxView: {
    top: 0,
    flex: 1,
    height: 46,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  // 按钮
  Button: {
    padding: 10,
  },
  titleView: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  titleText: {
    paddingBottom: 5,
    fontSize: 18,
    alignSelf: 'center',
  }
});
