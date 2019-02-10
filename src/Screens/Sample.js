import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default class Sample extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){

    }

    componentWillUnmount(){

    }

    render(){
        return(
            <View style={styles.mainStyle}>                
            </View>
        );
    }
}