import React, { useState, useEffect } from 'react'
import { View,Text,FlatList,TouchableHighlight ,StyleSheet,Image,AsyncStorage, Alert, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Listposts from './List_posts';

export default function Loved() {

  const deleteList=()=>{
   try{
   Alert.alert("Confirm","do you want to delete all items?",[
     {
       text:"OK",
       onPress:()=>{AsyncStorage.removeItem('favorite');ToastAndroid.show("all items has deleted",ToastAndroid.SHORT)}
     },
     {
       text:"Cancel",
       onPress:()=>("")
     }
   ]);
   }catch{
 console.log("err");
   }
  }



    return (
        <View style={{flex:1,alignItems:"center"}}>
           <View style={styles.topbar}>
           <Text style={styles.title}>You liked this<Icon name="heart" size={24} color="red" /> </Text> 
           <TouchableHighlight onPress={()=>deleteList()}>
             <Icon name="delete" size={25} color="red" />
           </TouchableHighlight>
           </View> 
           <Getlist/>      
        </View>
    )
}


const Getlist=()=>{

  const [list,set_list]=useState([]);

  const getdata=async()=>{
    try {
      var tab = await AsyncStorage.getItem('favorite');
      var parsed = JSON.parse(tab);
      var tab=[];
      parsed.map(item=>{
        tab.push(item);
      })
      set_list(tab);
     }catch(e){
        set_list([])
     }
  }


useEffect(()=>{
  getdata();
},[""]);

    return (
      <Listposts data={list} location={"loved"} />
    )
}
const styles=StyleSheet.create({
      title:{
          color:"rgb(110,22,33)",
          fontFamily:'serif',
          fontSize:26,
          fontWeight:"bold"
      },
      topbar:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        height:40,
        width:"100%",
        padding:5
      }
      
})

