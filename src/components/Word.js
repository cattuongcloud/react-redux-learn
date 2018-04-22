
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
class Word extends Component {
    render() {
        const { vn, en, memorized, id, isShow } = this.props.myWord;
        const textDecorationLine = memorized ? 'line-through' : 'none';
        const btnTextMemorized = memorized ? 'Forget' : 'Memorized';
        const vnText = isShow ? vn : '-----';
        const showHideText = isShow ? 'Hide Word' : 'Show Word';
        const handleActionBut = (type, id) => {          
            const action = {
                type: type,
                id:  id       
              }
             return () => this.props.dispatch(action);
        }        
        return (
            <View style={styles.worditem}>
                <Text style={{textDecorationLine: textDecorationLine}}>{en}</Text>
                <Text>{vnText}</Text>
                <View style={styles.actionBtn}> 
                    <TouchableOpacity onPress={handleActionBut('ToggoleMemorized', id)}><Text> {btnTextMemorized}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={handleActionBut('ToggoleShow', id)}><Text> {showHideText}</Text></TouchableOpacity>
                </View>
            </View>

        );
    }
}
export default connect()(Word);

const styles = StyleSheet.create({
    worditem: {
     padding: 10,
     margin: 5, 
     backgroundColor: '#ccc'     
    },
    actionBtn: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }  
  });