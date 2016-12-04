'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import Toaster from './toaster';

class Toast extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      title: 'Title',
      visiable: false,
      content: 'Content',
      backgroundColor: 'transparent',
    };

    this.timmer = null;
    this.callback = null;
  }

  render() {
    return <Toaster {...this.state} onHide={this._hide.bind(this)} />
  }


  /**
   * 提示信息（蓝色
   * @param  {[type]} opt [description]
   * @return {[type]}     [description]
   */
  info(opt) {
    this._show(opt, '#00bcd4');
  }

  /**
   * 错误信息
   * @param  {object} opt [description]
   * @return {[type]}     [description]
   */
  error(opt) {
    this._show(opt, '#f44336');
  }

  /**
   * 警告信息
   * @param  {[type]} opt [description]
   * @return {[type]}     [description]
   */
  warn(opt) {
    this._show(opt, '#ff9800');
  }

  /**
   * 成功信息
   * @param  {[type]} opt [description]
   * @return {[type]}     [description]
   */
  success(opt) {
    this._show(opt, '#4caf50');
  }


  /**
   * 隐藏ui
   * @return {[type]} [description]
   */
  _hide() {
    this.setState({
      visiable: false,
    });
    clearTimeout(this.timmer);
    typeof this.callback === 'function' ? this.callback() : null;
    this.callback = null;
  }

  /**
   * 显示UI
   * @param  {[type]} opt   [description]
   * @param  {[type]} color [description]
   * @return {[type]}       [description]
   */
  _show(opt, color) {
    this.setState({
      title: opt.title,
      visiable: true,
      content: opt.content,
      backgroundColor: color
    });

    this._callback(opt.timeout, opt.onPress);
  }

  /**
   * 取消定时器并执行回调
   * @return {[type]} [description]
   */
  _callback(tmout = 5 * 1000, callback) {
    this.timmer = setTimeout(this._hide.bind(this), tmout);
    this.callback = callback;
  }
}

const styles = StyleSheet.create({

});

export default Toast;