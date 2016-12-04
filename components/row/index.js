'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import Row1 from './subComponents/thumb-title-desc-info';
import Row2 from './subComponents/thumb-title-desc';
import Row3 from './subComponents/thumb-title-info';
import Row4 from './subComponents/thumb-title';

class Row extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type } = this.props;
    switch (type) {
      case 'thumb-title-desc-info':
        return <Row1 {...this.props} />
      case 'thumb-title-desc':
        return <Row2 {...this.props} />
      case 'thumb-title-info':
        return <Row3 {...this.props} />
      case 'thumb-title':
        return <Row4 {...this.props} />
    }
  }
}


export default Row;