import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { removePlace } from '../actions/place';

class ListItem extends Component {
  
  goToDetailPageOfTodo() {
    this.props.navigation.navigate('AudioDetail', { place: this.props.place });
  }

  render() {
    return (
      <TouchableOpacity onLongPress={ () => this.props.removePlace(this.props.place.id) } onPress={ () => this.goToDetailPageOfTodo() }>
        <View style = { styles.listItem }>
          <Text style={this.props.place.isCompleted ? { textDecorationLine: 'line-through' } : null}>{ this.props.place.value }</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee'
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removePlace: (placeId) => {
      dispatch(removePlace(placeId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);


