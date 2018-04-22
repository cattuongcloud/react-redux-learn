
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { connect } from 'react-redux';
class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            vn: '',
            en: ''
        };
        this.onAdd = this.onAdd.bind(this);
    }
    onAdd(){
        //en = this.state.en
        //vn = this.state.vn       
        const {en, vn} = this.state;        
        const action = {
            type: 'AddNewWord',
            en,
            vn      
        }
       this.props.dispatch(action);          
    }
    render() {                       
        return (
            <View style={styles.form}> 
                    <TextInput
                     style={styles.formInput}
                     value = {this.state.en}
                     onChangeText = {text => this.setState({en: text})}
                     placeholder='English'
                     />
                    <TextInput
                     style={styles.formInput}
                     value = {this.state.vn}
                     onChangeText = {text => this.setState({vn: text})}
                     placeholder='Viet Nam'
                     />
                    <TouchableOpacity onPress ={this.onAdd}><Text> Add</Text></TouchableOpacity>                
            </View>

        );
    }
}
export default connect()(Form);

const styles = StyleSheet.create({  
    form: {        
        justifyContent: 'center',
        alignItems: 'center',        
    },
    formInput: {
        //backgroundColor: '#fff',
        width: 170,
        marginTop: 10,
        padding: 0 

    }

  });