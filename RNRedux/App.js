/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import { connect } from 'react-redux';
import { addPlace, togglePlace } from './actions/place';

class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      placeName: '',
      places: []
    };
  }

  placeSubmitHandler() {
    console.log('============= placeSubmitHandler', this.state.placeName);
    if(this.state.placeName.trim() === '') {
      return;
    }
    this.props.add(this.state.placeName);
  }

  placeNameChangeHandler(value) {
    console.log('============= placeName', value);
    this.setState({
      placeName: value
    });    
  }
  
  placesOutput() {
    console.log("List ----->", this.props.places);
    return (
      <FlatList style = { styles.listContainer }
        data = { this.props.places }
        keyExtractor={(item, index) => index.toString()}
        renderItem = { ({ item }) => (
          <ListItem 
            navigation={this.props.navigation}
            placeName={ item.value }
            place={ item }
            removePlace = { () => this.props.remove(item.id) }
            togglePlace={ () => this.props.toggle(item.id)  }
          />
        )}
      />
    )
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style = { styles.inputContainer }>
          <TextInput
            placeholder = "Add Todos"
            style = { styles.placeInput }
            value = { this.state.placeName }
            onChangeText={ (text) => this.placeNameChangeHandler(text) }
          ></TextInput>
          <Button 
            title = 'Add' 
            style = { styles.placeButton }
            onPress = { () => this.placeSubmitHandler() }
          />
        </View>
        <View style = { styles.listContainer }>
          { this.placesOutput() }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(addPlace(name));
    },
    toggle: (placeId) => {
      dispatch(togglePlace(placeId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)