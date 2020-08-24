/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { toggleTimer, lapTimer, clearTimer } from './actions/time';

class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      timer: 0,
      lap: [],
      timerStartedAt: null,
      isStarted: false,
    };
  }

  render() {
    return(
      <View>
        <View style={[ styles.button ]}>
          <Button title={this.props.isStarted ? 'Pause Timer' : 'Start Timer'} onPress={() =>  this.props.toggleTimer()} />
        </View>
        <View style={[ styles.button ]}>
          <Button title='Clear Timer' onPress={() =>  this.props.clearTimer()} />
        </View>
        <View style={[ styles.button ]}>
          <Button title='Lap' onPress={() =>  this.props.lapTimer()} />
        </View>
        <Text style={[ styles.container ]}>{this.props.timer}</Text>
        <FlatList style={[ styles.listContainer ]}
          data={this.props.lap}
          renderItem = { (time) => (
            <Text style={[ styles.container ]}>{time.item}</Text>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    fontSize: 20
  },
  listContainer: {
    width: '100%'
  },
  button: {
    padding: 5,
  }
});

const mapStateToProps = state => {
  return {
    timer: state.timer.timer,
    isStarted: state.timer.isStarted,
    lap: state.timer.lap
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTimer: () => {
      dispatch(toggleTimer(dispatch));
    },
    lapTimer: () => {
      dispatch(lapTimer());
    },
    clearTimer: () => {
      dispatch(clearTimer());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)