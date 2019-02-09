import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        justifyContent: 'center',
        
    }
});

export default class Chat extends React.Component{
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
            <Text>Chats</Text>             
            </View>
        );
    }
}