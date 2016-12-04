'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';

class Toaster extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    const { props } = this;
    return (
      <Modal
        transparent={true}
        visible={props.visiable}
        animationType="fade">
        <View style={styles.container}>
          <TouchableWithoutFeedback
            onPress={props.onHide}>
            <View style={[styles.box, {
              backgroundColor: props.backgroundColor
            }]}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.content}>{props.content}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
    // backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  box: {
    // height: 150,
    // backgroundColor: '#f44336',
    shadowColor: '#AAA',
    borderBottomWidth: 1,
    borderBottomColor: '#BBB',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    elevation: 1,

    padding: 5,
    paddingTop: 25,
    paddingBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  content: {
    color: '#EEE',
    fontSize: 18,
  }
});


export default Toaster;