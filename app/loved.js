import React from 'react'
import { View,Text,FlatList,TouchableHighlight ,StyleSheet,Image,AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Loved() {
    return (
        <View style={{flex:1,alignItems:"center"}}>
           <Text style={styles.title}>Loved Items <Icon name="heart" size={24} color="red" /> </Text>  
           {get_list()}          
        </View>
    )
}


const get_list=()=>{
    return (
<FlatList
keyExtractor={(Item)=>Item.title}
numColumns={2}
data={get_data()}
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
    onPress={()=>get_data()}
    >
    <Icon name="delete-sweep" size={24} color="white"/>
    </TouchableHighlight>
  </View>
</View>)}}
 />
)
}
const get_data=()=>{
try {
  AsyncStorage.getItem('favorite',(err,res)=>{
    var tab=[];
      JSON.parse(res).map(item=>{
        tab.push({
            title:item.title,
            description:item.description,
            url:item.url
             })
      });
      console.log(tab)
          
  });
    
}catch(e){
    console.log(e)
    return [];
}
}

const styles=StyleSheet.create({
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
      },
      title:{
          color:"rgb(110,22,33)",
          fontFamily:'serif',
          fontSize:26,
          fontWeight:"bold"
      }
      
})

