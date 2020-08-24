import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';
import ListItem from './components/ListItem';
import { connect } from 'react-redux';
import { togglePlace } from './actions/place';

class AudioDetail extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      place: props.navigation.getParam('place')
    };
  }

  filterById(place) {
  	if (place.id === this.state.place.id) {
  		return true;
  	} else {
  		return false;
  	}
  }

  render() {
  	const currentPlace = this.props.places.filter(place => place.id === this.state.place.id)[0];
    return (
      <View style={ styles.container }>
        <Text style={currentPlace.isCompleted ? { textDecorationLine: 'line-through' } : null}>{ currentPlace.value }</Text>
        {
        	currentPlace.isCompleted ? 
	        <Button 
	          title = 'Mark as Incomplete' 
	          style = { styles.placeButton }
	          onPress = { () => this.props.toggle(currentPlace.id) }
	        />
	        :
	        <Button 
	          title = 'Mark as Complete' 
	          style = { styles.placeButton }
	          onPress = { () => this.props.toggle(currentPlace.id) }
	        />	        
        }

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
    width: '30%',
    marginTop: 20
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
    toggle: (placeId) => {
      dispatch(togglePlace(placeId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioDetail)


