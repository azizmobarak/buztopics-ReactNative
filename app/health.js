import React,{useEffect,useState} from 'react'
import { View,Text } from 'native-base'
import Listposts from './List_posts';
import {api} from "../api.config";
import {StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';

export default function Health() {

    const [data,setdata]=useState([]);
    const [isLoading,setLoading]=useState(false);

    useEffect(()=>{
      //get data 
      setLoading(true)
     fetch(api.health)
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
            <Avatar.Image style={{backgroundColor:"transparent"}} source={require('../assets/health.png')}/>
            <View style={{marginBottom:"15%"}}>
            {isLoading==true?
       <View 
        style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"blue",fontSize:22}}>Please wait ...</Text>
      </View> 
      :
     <Listposts data={data} location={"health"} />}
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
