import React,{useEffect,useState} from 'react'
import { View,Text, Picker } from 'native-base'
import Listposts from './List_posts';
import {api} from "../api.config";
import {StyleSheet} from 'react-native';
import {ActivityIndicator, Avatar, useTheme} from 'react-native-paper';
import { BannerAd } from '../ads';

export default function World() {

    const [data,setdata]=useState([]);
    const [country,setcountry]=useState('fr');
    const [isLoading,setLoading]=useState(false);
    const {colors}=useTheme();
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
         <BannerAd/>
           <Picker
           selectedValue={country}
           style={{width:"80%",height:40,color:colors.text}}
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
            <View style={{marginBottom:"15%",width:"100%",height:"100%"}}>
          {isLoading==true?
       <View 
        style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size="large"/>
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
      justifyContent:"flex-start",
        alignItems:"center",
        padding:2
    },
})
