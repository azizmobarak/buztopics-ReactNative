import React,{useEffect,useState} from 'react'
import { View,Text } from 'native-base'
import Listposts from './List_posts';
import {api} from "../api.config";
import {StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';

export default function Economy() {

    const [data,setdata]=useState([]);
    const [isLoading,setLoading]=useState(false);

    useEffect(()=>{
      setLoading(true)
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
        setLoading(false)
      })
      .catch(e=>[]);
    },[""]);  

    return (
        <View style={styles.container}>
            <Avatar.Image source={require('../assets/dollar.png')}/>
            <View style={{marginBottom:"15%"}}>
            {isLoading==true?
       <View 
        style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"blue",fontSize:22}}>Please wait  ...</Text>
      </View> 
      :
     <Listposts data={data} location={"economy"} />}
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
