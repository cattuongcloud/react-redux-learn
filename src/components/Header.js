
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
class Header extends Component {
    render() {  
        const haddleClickButton = (type) => {
            const action = {
              type: type        
            }
           return () => this.props.dispatch(action);
          }              
        return (
            <View style={styles.header}> 
                    <TouchableOpacity  onPress ={haddleClickButton('ToggoleIsAdding')}><Text> +</Text></TouchableOpacity>                
            </View>

        );
    }
}
export default connect()(Header);

const styles = StyleSheet.create({  
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 15 
    }  
  });