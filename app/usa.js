import React,{useEffect,useState} from 'react'
import { View,Text } from 'native-base'
import Listposts from './List_posts';
import {api} from "../api.config";
import {StyleSheet,ProgressBarAndroid} from 'react-native';
import {ActivityIndicator, Avatar} from 'react-native-paper';
import { BannerAd } from '../ads';

export default function USA() {

    const [data,setdata]=useState([]);
    const [isLoading,setLoading]=useState(false);

    useEffect(()=>{
      //get data 
      setLoading(true)
     fetch(api.usa)
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
            <View style={{marginBottom:"15%",width:"100%",height:"100%"}}>
            <BannerAd/>
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


const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex: 1,
        alignItems:"center",
        padding:2
    },
})
