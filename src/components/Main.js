
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Word from './Word';
import Fillter from './Fillter';
import Header from './Header'; 
import Form from './Form'; 
class Main extends Component {
  render() {
    const arrWordFilter = () => {
      debugger;
      var arr = this.props.arrWord;
       if(this.props.fillterStatus == 'SHOW_MEMIRIZED'){
        arr = this.props.arrWord.filter(item => item.memorized)
      } 
      else if(this.props.fillterStatus == 'SHOW_NEED_PRACTICE'){
        arr = this.props.arrWord.filter(item => !item.memorized)
      }
      return arr; 
    }
    return (
      <View style={styles.container}>
      <Header/>
        <View style={styles.listdata}>  
          { this.props.isAdding ? <Form />: null}   
          <FlatList
            data={arrWordFilter()} 
            renderItem={({item}) => <Word myWord ={item}></Word>} 
            keyExtractor={(item) => item.toString()}
          />
        </View>
        <Fillter /> 
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    fillterStatus: state.fillterStatus,
    arrWord : state.arrWord,
    isAdding: state.isAdding
  }
}
export default connect(mapStateToProps)(Main);
const styles = StyleSheet.create({
  container: {   
    backgroundColor: '#F5FCFF',
    flex: 1,  
  },
  listdata: {       
    marginTop: 5,
    flex: 12
  }

});
