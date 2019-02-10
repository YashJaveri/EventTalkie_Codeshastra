import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const styles = StyleSheet.creat({
    mainStyle: {
        flex: 1,
        justifyContent: 'center',
        alignCenter: 'center'
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
            </View>>
        );
    }
}