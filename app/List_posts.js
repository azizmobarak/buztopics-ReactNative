import React, { useState } from 'react'
import { StyleSheet,Share} from 'react-native';
import { Button,View,FlatList,Image,AsyncStorage,Text,TouchableHighlight,ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {WebView} from 'react-native-webview';
import {useTheme} from '@react-navigation/native';
import { BannerAd4 } from '../ads';



export default function Listposts(props){

const location = props.location;
const [uri,seturi]=useState('empty');
const {colors} = useTheme();


const shareTo=async(desc,url)=>{
    try {
      const result = await Share.share({
        message:
          desc +"click here for more "+url+"\n"+"for more News install BuzTopics Application available on PlayStore",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
       
      }
    } catch (error) {
      alert(error.message);
    }
}

var counter =0;
    return(
      uri==="empty" ?
      <FlatList
    keyExtractor={(Item)=>Item.title}
    numColumns={2}
    data={props.data}
    //Error : the image inside require need to be dynamic.
    renderItem={({item,index})=>{ 
     return (    
      <View
      style={{
        marginLeft:2,
        marginBottom:100,
        backgroundColor:colors.card,
        padding:10,
        maxWidth:'50%'
      }}>
    <Image style={{width:"100%",height:200}} source={{uri:item.img}}/>
    <TouchableHighlight
       onPress={()=>seturi(item.url)}>
      <View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableHighlight>
      <View style={{
        flex:1,
        flexDirection:'column',
        width:'100%'
      }}>
      <View style={styles.item_bottom_bar}>
        <TouchableHighlight
        onPress={()=>shareTo(item.description,item.url)}
        >
        <Icon name="share" size={24} color="white" />
        </TouchableHighlight>
        <TouchableHighlight
        onPress={()=>add_loved(item.title,item.url,item.description,item.img)}
        >
        {location!="loved"? 
        <Icon name="heart" size={24} color="white"/>
        :
          <Icon name="heart" size={24} color="red"/>
        }
        </TouchableHighlight>
      </View>
      </View>
    </View>
     )}}
     />

    :
     <View style={{width:"100%",height:"100%"}}>
   <WebView source={{ uri:uri}} style={styles.webview} />
   <Button title="back" onPress={()=>seturi('empty')} />
   </View>
    
    )
  }

  //this function added our items where it'does not exist inside the list of items 
const tab=[];
const add_loved=async(title,url,description,img)=>{
try{
   try{
    var data = await AsyncStorage.getItem('favorite');
    var result =JSON.parse(data).find(item=>item.title===title);
    if(typeof(result)==="undefined"){
      var obj={
        title:title,
        description:description,
        url:url,
        img:img
      }
      tab.push(obj);
      AsyncStorage.setItem("favorite",JSON.stringify(tab));
      ToastAndroid.show("Item added", ToastAndroid.SHORT);
    }else{
      ToastAndroid.show("Item already exist in your list", ToastAndroid.SHORT);
    }
   }catch{
  var obj={
      title:title,
      description:description,
      url:url,
      img:img
    }
    tab.push(obj);
    AsyncStorage.setItem("favorite",JSON.stringify(tab));
    ToastAndroid.show("Item added", ToastAndroid.SHORT);
   }
}catch(e){
ToastAndroid.show("error try again !", ToastAndroid.SHORT);
}
}


const styles=StyleSheet.create({
        description:{
          color:"#fff",
          fontFamily:"serif",
        },
        title:{
          color:"yellow",
          fontFamily:"serif",
        },
        item_bottom_bar:{
          flex:1,
          flexDirection:"row",
          justifyContent:'space-between',
          alignItems:"flex-end",
          padding:1
        },
        webview:{
          width:"100%",
          height:"95%",
         backgroundColor:"white"
        }
        
})