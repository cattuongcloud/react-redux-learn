
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bold } from 'ansi-colors';
class Fillter extends Component {
  render() {  
   const activeText = (fillterStatus) => {
      if(fillterStatus === this.props.fillterStatus) {
        return styles.buttomTextActive;
      }      
    }  
    const haddleClickButton = (type) => {
      const action = {
        type: type        
      }
     return () => this.props.dispatch(action);
    }
    return ( 
        <View style={styles.fillterStyle}>
            <TouchableOpacity onPress ={haddleClickButton('showAll')}><Text style={activeText('SHOW_ALL')}>Show All</Text></TouchableOpacity>
            <TouchableOpacity onPress ={haddleClickButton('showMemorized')}><Text style={activeText('SHOW_MEMIRIZED')}>Memorized</Text></TouchableOpacity>
            <TouchableOpacity onPress ={haddleClickButton('ShowNeedPractice')}><Text style={activeText('SHOW_NEED_PRACTICE')}>Need Prac</Text></TouchableOpacity>
        </View>
    );
  }
}
function mapStateToProps(state) {
    return {
      fillterStatus: state.fillterStatus     
    }
  }
export default connect(mapStateToProps)(Fillter); 
const styles = StyleSheet.create({
  fillterStyle: {
    marginTop: 5,
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center'
  },
  buttomTextActive: {
    color: 'blue',
    fontWeight: 'bold'
  }
});
