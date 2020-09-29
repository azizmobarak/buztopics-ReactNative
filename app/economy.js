import React,{useEffect,useState} from 'react'
import { View,Text } from 'native-base'
import Listposts from './List_posts';
import {api} from "../api.config";
import {StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';

export default function Economy() {

    const [data,setdata]=useState([]);

    useEffect(()=>{
      //get data 
     fetch(api.eco)
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
      .catch(e=>[]);
    },[""]);  

    return (
        <View style={styles.container}>
            <Avatar.Image source={require('../assets/dollar.png')}/>
            <View style={{marginBottom:"15%"}}>
                <Listposts data={data} location="economy"  />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"center",
        padding:2
    },
})
