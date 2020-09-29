import React, { useState, useEffect } from 'react'
import { View,Text,StyleSheet, Platform } from 'react-native'
import { TextInput } from 'react-native-paper';
import Listposts from './List_posts';

const Endpoint="https://newsapi.org/v2/everything?q=";

export default function Search({route,navigation}) {
    const from = route.params.from;

    const [data,setdata]=useState([]);
    const [key,setkey]=useState('');

useEffect(()=>{
    console.log(key)
    //get data 
 fetch(Endpoint+key+"&apiKey=099a9e2e1ec54fbf82af805493521962")
 .then(res=>res.json())
 .then(data=>{
   var tab=[];
   if(data.status==="ok"){
     {
     data.articles.map(item=>{
      {
       tab.push({title : item.title,
         description :item.description, 
         url : item.url,
         img :item.urlToImage})    
     }
     })
     }
   }

   setdata(tab);
 })
 .catch(e=>setdata([]));
},[key])

    if(from==="top"){
        return (
            <View style={styles.container_from_top}>
            <View style={styles.view_container}>
            <TextInput value={key} onChangeText={setkey} style={styles.search_inp} placeholder="Search for something!" />
            </View>
            <View style={{marginTop:20}}>
            <Listposts data={data} location="search" />
            </View>
            </View>
        )
    }else{
        return (
            <View style={styles.container_from_top}>
            <TextInput value={key} onChangeText={setkey} style={styles.search_inp} placeholder="Search for something!" />
            <View style={{padding:2}}>
            <Listposts data={data} location="search" />
            </View>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    container_from_top:{
        marginTop:20,
        flex:1,
        alignItems:"center"
    },
    view_container:{
        marginTop:Platform.OS==="android"? 20 : 0,
        alignItems:"center",
        width:"100%"
    },
    search_inp:{
        backgroundColor:"#fff",
        height:40,
        width:"80%",
        borderColor:"black",
    }
})
