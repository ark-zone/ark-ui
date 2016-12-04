'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class Button extends Component {
  render() {
    const { props } = this;

    /**
     * 通过判断props.type，来进行组件的组合
     * @type {Array}
     */
    let CMPS = [];
    switch (props.type) {
      case 'text':
        CMPS.push(this._renderText());
        break;
      case 'text-icon':
        CMPS.push(this._renderText());
        CMPS.push(this._renderIcon());
        break;
      case 'icon':
        CMPS.push(this._renderIcon());
        break;
      case 'icon-text':
        CMPS.push(this._renderIcon());
        CMPS.push(this._renderText());
        break;
    }

    return (
      <TouchableOpacity
        style={{
          width: props.width
        }}
        onPress={props.onPress}>
        <View style={[styles.container, {
          borderColor: props.borderColor || props.backgroundColor,
          borderRadius: props.borderRadius,
          backgroundColor: props.backgroundColor
        }]}>
        {[...CMPS]}
        </View>
      </TouchableOpacity>
    );
  }

  /**
   * 渲染图标
   * @return {[type]} [description]
   */
  _renderIcon() {
    const { props } = this;
    return (
      <Icon 
        key={this._randomKey}
        name={props.icon}
        size={props.size + 2}
        color={props.color}
      />
    )
  }

  /**
   * 渲染文字
   * @return {[type]} [description]
   */
  _renderText() {
    const { props } = this;
    return (
      <Text
        key={this._randomKey}
        style={[styles.text, {
          color: props.color,
          fontSize: props.size,
        }]}>  {props.text}  </Text>
    )
  }

  /**
   * 随机key
   * @return {string} [description]
   */
  get _randomKey() {
    return Math.random().toString(36).substr(2, 10);
  }
}

// 样式
const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
    borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {

  }
});

// 属性类型
Button.propTypes = {
  type: React.PropTypes.oneOf(['text', 'icon', 'text-icon', 'icon-text']).isRequired,
  icon: React.PropTypes.string,
  text: React.PropTypes.string,
  size: React.PropTypes.number,
  color: React.PropTypes.string,
  width: React.PropTypes.number,
  borderColor: React.PropTypes.string,
  borderRadius: React.PropTypes.number,
  backgroundColor: React.PropTypes.string,
}

// 默认属性
Button.defaultProps = {
  color: 'white',
  size: 16,
  width: 150,
  backgroundColor: 'transparent',
  borderRadius: 5,
}

export default Button;