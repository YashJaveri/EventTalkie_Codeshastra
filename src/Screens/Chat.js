import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import ProfileIcon from "../Components/ProfileIcon";

import Constants from "../Constants";

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        justifyContent: 'center',        
    }
});

const users = [
    {
    name: "Yash Javeri",
    uid: "1", 
    },
    {
        name: "Vishal Makwana",
        uid: "2"
    }
}

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
               <FlatList
                data={users}
                renderItem={({item}) => (                    
                    <View style={{justifyContent:'flex-start', alignItems:'center', flexDirection: 'row'}}>
                        <ProfileIcon text={item.name} size={20} borderWidth={2}/>
                        <Text style={{fontSize:12, fontWeight:'bold', color: Constants.DARK_GREY}}>{item.name}</Text>
                        <Image  style={{width: 20, height: 20}} source={require("../Assets/mic_gif.gif")}/>
                    </View>
                )}                
               />      
               <TouchableOpacity onPress={() => {}}>
                <View style={{width: 25, height: 25, backgroundColor: Constants.SECONDARY, borderRadius: 12.5}}>
                    <Image style={{width: 25, height: 25}} source={require("../Assets/main_mic.png")}/>
                </View>
               </TouchableOpacity>     
            </View>
        );
    }
}