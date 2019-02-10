import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, Dimensions } from 'react-native';
import ProfileIcon from "../Components/ProfileIcon";

import Constants from "../Constants";

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
               
    }
});

const users = [
    {
    name: "Yash Javeri",
    uid: "1", 
    },
    {
        name: "Vishal Makwana",
        uid: "2",
    }
]

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


    micPressed(){

        //handle mic here
        

    }

    render(){
        return(
            <View style={styles.mainStyle}>   
               <FlatList
                data={users}
                renderItem={({item}) => (                    
                    <View style={{width: Dimensions.get('screen').width, justifyContent:'flex-start', alignItems:'center', flexDirection: 'row'}}>
                        <ProfileIcon text={item.name} size={40} borderWidth={2}/>
                        <Text style={{fontSize:18, fontWeight:'bold', color: Constants.DARK_GREY,padding:15,}}>{item.name}</Text>
                        <View style={{flex:1}}/>
                        <Image  style={{width: 40, height: 40,padding:15,}} source={require("../Assets/mic.gif")}/>
                    </View>
                )}                
               />      
               <TouchableOpacity onPress={() => {this.micPressed();}}>
                <View style={{width: 50, height: 50,justifyContent:'center',alignItems:'center', backgroundColor: Constants.SECONDARY, borderRadius:25, margin:10}}>
                    <Image style={{width: 35, height: 35 }} source={require("../Assets/main_mic.png")}/>
                </View>
               </TouchableOpacity>     
            </View>
        );
    }
}