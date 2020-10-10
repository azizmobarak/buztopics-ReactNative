import React, { useState, useEffect } from 'react'
import { View,Text,FlatList,TouchableHighlight ,StyleSheet,Image,AsyncStorage, Alert, ToastAndroid} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BannerAd } from '../ads';
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
      setLoading(false)
    }catch{
    }
  }
  

  
  return (
    <View style={{flex:1,alignItems:"center"}}>
    <BannerAd/>
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
    const [isLoading,setLoading]=useState(false);
    
  const getdata=async()=>{
    setLoading(true);
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
     setLoading(false);
  }


useEffect(()=>{
  getdata();
},[""]);

    return (
      isLoading==true?
       <View 
        style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size="large" />
      </View>
      :
      list.length==0?
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"blue",fontSize:30}} >No posts saved here!</Text>
      </View>
      :
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

