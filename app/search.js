import React, { useState, useEffect } from 'react'
import { View,Text,StyleSheet, Platform } from 'react-native'
import { ActivityIndicator, TextInput } from 'react-native-paper';
import {useTheme} from '@react-navigation/native'
import Listposts from './List_posts';
import { BannerAd } from '../ads';

const Endpoint="https://newsapi.org/v2/everything?q=";

export default function Search({route,navigation}) {
    const from = route.params.from;

    const [data,setdata]=useState([]);
    const [key,setkey]=useState('new');
    const [isLoading,setLoading]=useState(false);
    const {colors} = useTheme();

useEffect(()=>{
    setLoading(true)
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
   setLoading(false)
 })
 .catch(e=>setdata([]));
},[key])

    if(from==="top"){
        return (
            <View style={styles.container_from_top}>
            <View style={styles.view_container}>
            <BannerAd/>
            <TextInput 
             onChangeText={setkey}
              placeholder="Search for something!"
              style={{
          backgroundColor:colors.background,
           height:40,
        width:"80%",
        borderColor:"black",
        color:colors.text
              }} 
             
               />
            </View>
            <View style={{marginTop:20,width:"100%",height:"100%"}}>
            {isLoading==true?
       <View 
        style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size="large" />
      </View> 
      :
     <Listposts data={data} location={"usa"} />}
            <BannerAd/>
            </View>
            </View>
        )
    }else{
        return (
            <View style={styles.container_from_top}>
            <BannerAd/>
            <TextInput  
            onChangeText={setkey}
            style={{
          backgroundColor:colors.background,
           height:40,
        width:"80%",
        borderColor:"black",
        color:colors.text
              }}
              placeholder="Search for something!" />
            <View style={{padding:2,width:"100%",height:"100%"}}>
            {isLoading==true?
       <View 
        style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size="large" />
      </View> 
      :
     <Listposts data={data} location={"usa"} />}
            </View>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    container_from_top:{
        marginTop:0,
        flex:1,
        alignItems:"center",
        width:"100%"
    },
    view_container:{
        marginTop:Platform.OS==="android"? 0 : 0,
        alignItems:"center",
        width:"100%"
    },
    search_inp:{
        
    }
})
