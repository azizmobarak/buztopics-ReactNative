import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Modal,Alert,TouchableHighlight  } from 'react-native';
import Settings from './settings';
import Search from './search';
import { Avatar } from 'react-native-paper';
import Contactus from './contactus';
import Loved from './loved';
import LisPosts from './List_posts';
import Developer from './developer';
import USA from './usa';
import Health from './health';
import Economy from './economy';

import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import { api } from '../api.config';
import Sport from './sport';
import World from './world';
const stack = createStackNavigator();

export default function Home({navigation}){
const [show_modal,set_show_modal]=useState(false);

    return (
      <stack.Navigator 
      initialRouteName="Home"
      
         headerMode="screen"
         screenOptions={
           
           {headerTitle:<Text style={{color:"rgb(100,23,222)"}}>WhatTheySay</Text>,
           headerLeft:()=>(
               <TouchableHighlight style={styles.menu_btn} underlayColor="white" onPress={()=>navigation.openDrawer()}>
                 <Avatar.Icon icon="menu" size={30} />
               </TouchableHighlight>
           ),
           headerRight:()=>(
             <TouchableHighlight style={styles.menu_btn} underlayColor="white" onPress={()=>navigation.navigate('Search',{from:"top"})}>
                 <Avatar.Image style={{backgroundColor:"white"}} source={require('../assets/marketing.png')} size={30} />
               </TouchableHighlight>
           )
           }
         }
         >
          <stack.Screen name="Home" component={Main}/>
          <stack.Screen name="Settings" component={Settings}
          options={
            {
            headerTitle:"Settings",
          }}
           />
          <stack.Screen name="Search" component={Search}
           options={
            {
            headerTitle:"Search",
          }}

          />
          <stack.Screen name="Contact" component={Contactus}
           options={
            {
            headerTitle:"Contact",
          }}

          />
          <stack.Screen name="Loved" component={Loved}
            options={
            {
            headerTitle:"Loved list",
          }}
          />
          <stack.Screen name="Developer" component={Developer}
            options={
            {
            headerTitle:"About developer",
          }}
          />
           <stack.Screen name="USA" component={USA}
            options={
            {
            headerTitle:<Text style={{fontFamily:"serif",fontSize:22,fontWeight:"bold"}}>USA</Text>,
          }}
          />
           <stack.Screen name="Health" component={Health}
            options={
            {
            headerTitle:<Text style={{fontFamily:"serif",fontSize:22,fontWeight:"bold"}}>Health</Text>,
          }}
          />
           <stack.Screen name="Sport" component={Sport}
            options={
            {
            headerTitle:<Text style={{fontFamily:"serif",fontSize:22,fontWeight:"bold"}}>Sport</Text>,
          }}
          />
          <stack.Screen name="Economy" component={Economy}
            options={
            {
            headerTitle:<Text style={{fontFamily:"serif",fontSize:22,fontWeight:"bold"}}>Economy</Text>,
          }}
          />
          <stack.Screen name="World" component={World}
            options={
            {
            headerTitle:<Text style={{fontFamily:"serif",fontSize:22,fontWeight:"bold"}}>World</Text>,
          }}
          />
         </stack.Navigator>
    );
}

const Main=({navigation})=>{

  const [data,setdata]=useState([]);
 const [isLoading,setLoading]=useState(false);


useEffect(()=>{
  setLoading(true);
  //get data 
 fetch(api.all)
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
},[""]);


return(
    <View style={styles.container}>
     <View style={styles.home_top}>

     <View style={styles.row}>
      <View style={styles.column}>
      {avatar_touchable(require('../assets/us.png'),'usa News',{navigation},'USA')}
      </View>
      <View style={styles.column}>
      {avatar_touchable(require('../assets/profits.png'),'Economy $',{navigation},'Economy')}
      </View>
     </View>

     <View style={styles.row}>
      <View style={styles.column}>
      {avatar_touchable(require('../assets/glasses.png'),"Let's Search",{navigation},'Search')}
      </View>
      <View style={styles.column}>
      {avatar_touchable(require('../assets/health.png'),'Health',{navigation},'Health')}
      </View>
     </View>
     </View>
    
     <View style={styles.home_bottom}>
     {isLoading==true?
       <View 
        style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"blue",fontSize:22}}>Please wait  ...</Text>
      </View> 
      :
     <LisPosts data={data} location={"home"} />}
     </View>
    </View>
)
}

 

const styles = StyleSheet.create({
    menu_btn:{
      padding:10,
    },
  container:{
    flex:1,
    backgroundColor:"lightgray",
  },
  title:{
    color:"white",
    fontSize:30,
    fontFamily:"serif",
    alignSelf:"center"
  },
  home_top:{
    flex:0.4,
    backgroundColor:"rgb(100,23,222)",
    justifyContent:"center",
    alignItems:"center",
  },
  home_bottom:{
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
    padding:10
  },
  row:{
    flex:0.2,
    flexDirection:"row",
    padding:2,
    justifyContent:"space-between",
    width:"80%",
  },
  column:{
    padding:4,
    backgroundColor:"#fff",
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:3
  },
  inside_col_avatar:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    width:"100%"
  },
  text_style:{
    fontFamily:"serif",
    fontWeight:'bold'
  },
  
  });

  const avatar_touchable=(url,text,{navigation},page)=>{
    return(
      <TouchableHighlight onPress={()=>navigation.navigate(page,{from:'home'})} underlayColor="white">
      <View style={styles.inside_col_avatar}>
      <Avatar.Image 
      style={{backgroundColor:"white"}} 
      source={url} size={30} />
      <Text style={styles.text_style}>
      {text}
      </Text>
      </View>
      </TouchableHighlight>
    )
  }


  