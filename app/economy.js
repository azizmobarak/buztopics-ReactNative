import React,{useEffect,useState} from 'react'
import { View,Text } from 'native-base'
import Listposts from './List_posts';
import {api} from "../api.config";
import {StyleSheet} from 'react-native';
import {ActivityIndicator, Avatar} from 'react-native-paper';
import { BannerAd } from '../ads';

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
            <BannerAd/>
            <View style={{marginBottom:"15%",width:"100%",height:"100%"}}>
            {isLoading==true?
       <View 
        style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size="large" />
      </View> 
      :
     <Listposts data={data} location={"economy"} />}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
      width:"100%",
        flex: 1,
        alignItems:"center",
        padding:2,
        marginBottom:20
    },
})
