import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem } from './ListItem';
import { connect } from 'react-redux';

const getInCompletedTodo = (places) => {
  return places.filter(place => !place.isCompleted);
}

const mapStateToProps = state => {
  return(
    places: getCompletedTodo(state.places);
  )
}

const mapDispatchToProps = dispatch => {
  return dispatch;
}

const VisibleListItem = connect(mapStateToProps, mapDispatchToProps)(ListItem);

export default VisibleListItem;