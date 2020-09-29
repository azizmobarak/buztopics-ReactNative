import React from 'react'
import { View } from 'native-base'
import { StyleSheet,ProgressBarAndroid,ProgressViewIOS } from 'react-native';
import { FlatList,Image,AsyncStorage,Text,TouchableHighlight,ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Listposts(props){

const location = props.location;

const isliked =async(title)=>{
  try{
const data = await JSON.parse(AsyncStorage.getItem('favorite'));
return data.find(item=>item.title===title);
  }catch{
   return "undefined";
  }
}

    return(
      <FlatList
    keyExtractor={(Item)=>Item.title}
    numColumns={2}
    data={props.data}
    //Error : the image inside require need to be dynamic.
    renderItem={({item})=>{

     return (
       props.data.length==0 ?
       <Text style={{fontSize:44,color:"black"}}>Loading ...</Text>
       :
       <View
      style={styles.item}>
    <Image style={{width:"100%",height:200}} source={{uri:item.img}}/>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.item_bottom_bar}>
        <TouchableHighlight
        >
        <Icon name="share" size={24} color="white" />
        </TouchableHighlight>
        <TouchableHighlight
        onPress={()=>add_loved(item.title,item.url,item.description,item.img)}
        >
        {location!="loved"? 
        <Icon name="heart" size={24} color="white"/>
        :
          typeof isliked(item.title)==="undefined" ? 
          <Icon name="heart" size={24} color="white"/>
          :
          <Icon name="heart" size={24} color="red"/>
        }
        </TouchableHighlight>
      </View>
    </View>
     )}}
     />
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
console.log(e)
}
}


const styles=StyleSheet.create({
    item:{
        marginLeft:2,
        marginBottom:3,
        backgroundColor:"rgb(100,23,222)",
        padding:10,
        maxWidth:'50%'
        },
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
        }
        
})