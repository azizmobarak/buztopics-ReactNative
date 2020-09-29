import React,{useEffect,useState} from 'react'
import { View,Text, Picker } from 'native-base'
import Listposts from './List_posts';
import {api} from "../api.config";
import {StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';

export default function World() {

    const [data,setdata]=useState([]);
    const [country,setcountry]=useState('fr');
    const [isLoading,setLoading]=useState(false);

    useEffect(()=>{
      //get data 
      setLoading(true);
     fetch("http://newsapi.org/v2/top-headlines?country="+country+"&apiKey=099a9e2e1ec54fbf82af805493521962")
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
        setLoading(false);
      })
      .catch(e=>[]);
    },[country]);  

    return (
        <View style={styles.container}>
           <Picker
           selectedValue={country}
           style={{width:"80%",height:40,color:"black"}}
           onValueChange={(value,index)=>setcountry(value)}
           >
          <Picker.Item label="United state"  value="us"/>
          <Picker.Item label="France"  value="fr" />
          <Picker.Item label="Emirate"  value="ae" />
          <Picker.Item label="Australia"  value="au" />
          <Picker.Item label="Japan"  value="jp" />
          <Picker.Item label="Turkey"  value="tr" />
          <Picker.Item label="Russia"  value="rs" />
          <Picker.Item label="sweden"  value="se" />
           </Picker>
            <View style={{marginBottom:"15%"}}>
          {isLoading==true?
       <View 
        style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"blue",fontSize:22}}>Please wait  ...</Text>
      </View> 
      :
     <Listposts data={data} location={"usa"} />}
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
