import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Settings from './settings';
import Search from './search';
import { Button, Avatar } from 'react-native-paper';
import { TouchableHighlight } from 'react-native';
import { FlatList,Image,AsyncStorage } from 'react-native';
import Contactus from './contactus';
import Loved from './loved';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import {createStackNavigator} from '@react-navigation/stack';
const stack = createStackNavigator();

export default function Home({navigation}){

    return (
      <stack.Navigator 
      initialRouteName="Home"
      
         headerMode="screen"
         screenOptions={
           
           {headerTitle:"BuzTopics",
           headerLeft:()=>(
               <TouchableHighlight style={styles.menu_btn} underlayColor="white" onPress={()=>navigation.openDrawer()}>
                 <Avatar.Icon icon="menu" size={30} />
               </TouchableHighlight>
           ),
           headerRight:()=>(
             <TouchableHighlight style={styles.menu_btn} underlayColor="white" onPress={()=>openmodal()}>
                 <Avatar.Image style={{backgroundColor:"white"}} source={require('../assets/marketing.png')} size={30} />
               </TouchableHighlight>
           )
           }
         }
         >
          <stack.Screen name="Home" component={Main}/>
          <stack.Screen name="Settings" component={Settings} />
          <stack.Screen name="Search" component={Search}/>
          <stack.Screen name="Contact" component={Contactus}/>
          <stack.Screen name="Loved" component={Loved}/>
         </stack.Navigator>
    );
}

const Main=({navigation})=>{
return(
    <View style={styles.container}>
     <View style={styles.home_top}>

     <View style={styles.row}>
      <View style={styles.column}>
      {avatar_touchable(require('../assets/cloud-coding.png'),'Learn to code',{navigation},'Developer')}
      </View>
      <View style={styles.column}>
      {avatar_touchable(require('../assets/contact-us.png'),'contact us',{navigation},'Contact')}
      </View>
     </View>

     <View style={styles.row}>
      <View style={styles.column}>
      {avatar_touchable(require('../assets/glasses.png'),'look around',{navigation},'Search')}
      </View>
      <View style={styles.column}>
      {avatar_touchable(require('../assets/marketing.png'),'suggestions',{navigation},'Suggestions')}
      </View>
     </View>
     </View>
    
     <View style={styles.home_bottom}>
      {list_posts()}
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
    alignItems:"center"
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
  item:{
  marginLeft:2,
  marginBottom:3,
  backgroundColor:"rgb(100,23,222)",
  padding:10,
  },
  text:{
    color:"#fff",
    fontFamily:"serif"
  },
  item_bottom_bar:{
    flex:1,
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:"center",
    padding:2
  }
  
  });

  const avatar_touchable=(url,text,{navigation},page)=>{
    return(
      <TouchableHighlight onPress={()=>navigation.navigate(page)} underlayColor="white">
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


  const list_posts=()=>{

    const [color,set_color]=useState('')

    return(
      <FlatList
    keyExtractor={(Item)=>Item.title}
    numColumns={2}
    data={[
      {title:"hello",description:"this is a little words about",url:"https://reactnative.dev/img/tiny_logo.png"},
      {title:"the second one",description:"this is a little words about",url:"https://reactnative.dev/img/tiny_logo.png"},
      {title:"some other title1",description:"this is a little words about",url:"https://reactnative.dev/img/tiny_logo.png"},
      {title:"some other title2",description:"this is a little words about",url:"https://reactnative.dev/img/tiny_logo.png"},
      {title:"some other title3",description:"this is a little words about",url:"https://reactnative.dev/img/tiny_logo.png"},
      {title:"some other title4",description:"this is a little words about",url:"https://reactnative.dev/img/tiny_logo.png"},
      {title:"some other titles",description:"this is a little words about",url:"https://reactnative.dev/img/tiny_logo.png"},
      {title:"some other titled",description:"this is a little words about",url:"https://reactnative.dev/img/tiny_logo.png"},
      {title:"some other titlea",description:"this is a little words about",url:"https://reactnative.dev/img/tiny_logo.png"},
      {title:"some other titlez",description:"this is a little words about",url:"https://reactnative.dev/img/tiny_logo.png"},
      {title:"some other titler",description:"this is a little words about",url:"https://reactnative.dev/img/tiny_logo.png"},
      {title:"some other titlef",description:"this is a little words about",url:"https://reactnative.dev/img/tiny_logo.png"}
    ]}
    //Error : the image inside require need to be dynamic.
    renderItem={({item})=>{
     return (
     <View
      style={styles.item}>
    <Image style={{width:"100%",height:100}} source={{uri:item.url}}/>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.text}>{item.description}</Text>
      <View style={styles.item_bottom_bar}>
        <TouchableHighlight
        >
        <Icon name="share" size={24} color="white" />
        </TouchableHighlight>
        <TouchableHighlight
        onPress={()=>add_loved(item.title,item.url,item.description)}
        >
        <Icon name="heart" size={24} color="white"/>
        </TouchableHighlight>
      </View>
    </View>)}}
     />
    )
  }

  const tab=[];
const add_loved=async(title,url,description)=>{
var obj ={
  title:title,
  url:url,
  description:description
}
tab.push(obj);
await AsyncStorage.setItem('favorite',JSON.stringify(tab));

}

const verify_loved=async(title)=>{
  await AsyncStorage.getItem('favorite',(err,res)=>{
    if(err) console.log(err);
      else{
  var arr = JSON.parse(res);
    arr.map((item)=>{
      console.log(item.title)
      if(item.title===title){
        return true;
      }else{
        return false;
      }
    })
      }
    });
}