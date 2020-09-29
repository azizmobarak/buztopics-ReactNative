import React, { useState, useEffect } from 'react';
import {DrawerContent,DrawerItemList,DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View,StyleSheet } from 'react-native';
import {Avatar,Text,Drawer, TouchableRipple,Switch} from 'react-native-paper';
import { AsyncStorage } from 'react-native';

export default function Drawer_Content(props) {


    const [dark_them,set_dark_them]=useState(false)

    useEffect(()=>{
      add_dark_them();
      get_dark_them();
    },[dark_them])

const add_dark_them=()=>{
  if(dark_them==true)
  {
    AsyncStorage.setItem('them',"black")
  }else{
    AsyncStorage.setItem('them',"white")
  }
}

const get_dark_them=async()=>{
  var them= await AsyncStorage.getItem('them');
  return them;
}

    return (
     <View style={{flex:1}}>
      <DrawerContentScrollView {...props}>
          <View style={{flex:1,alignItems:"center"}}>
            <Avatar.Image style={{backgroundColor:"white"}} size={130} source={require('../assets/avatar.png')}/>
          </View>
          <Drawer.Section>
              <DrawerItem
                  label="home"
                  icon={()=>(
                    <Avatar.Icon color="white" size={30} icon="home"/>
                  )}
                  onPress={()=>props.navigation.navigate('Home',{screen:"Home"})}
              />
              <DrawerItem
                  label="Loved"
                  icon={()=>(
                    <Avatar.Icon color="white" size={30} icon="heart"/>
                  )}
                  onPress={()=>props.navigation.navigate('Home',{screen:"Loved"})}
              />
          </Drawer.Section>
          <Drawer.Section title="pages">
              <DrawerItem 
                  label="Search"
                  icon={()=>(
                    <Avatar.Image style={{backgroundColor:"white"}} collapsable={false} size={30} color="#fff" source={require('../assets/glasses.png')}/>
                  )}
                  onPress={()=>props.navigation.navigate('Search',{from:"top"})}
              />
               <DrawerItem 
                  label="Sports"
                  icon={()=>(
                    <Avatar.Image style={{backgroundColor:"white"}} collapsable={false} size={30} color="#fff" source={require('../assets/sport.png')}/>
                  )}
                  onPress={()=>props.navigation.navigate('Home',{screen:"Sport"})}
              />
               <DrawerItem 
                  label="World"
                  icon={()=>(
                    <Avatar.Image style={{backgroundColor:"white"}} collapsable={false} size={30} color="#fff" source={require('../assets/world.png')}/>
                  )}
                  onPress={()=>props.navigation.navigate('Home',{screen:"World"})}
              />
               <DrawerItem 
                  label="Money & Economy"
                  icon={()=>(
                    <Avatar.Image style={{backgroundColor:"white"}} collapsable={false} size={30} color="#fff" source={require('../assets/dollar.png')}/>
                  )}
                  onPress={()=>props.navigation.navigate('Search',{from:"top"})}
              />
          </Drawer.Section>
          <Drawer.Section title="preferences">
          <DrawerItem
                  label="Settings"
                  icon={()=>(
                    <Avatar.Icon color="white" size={30} icon="settings"/>
                  )}
                  onPress={()=>props.navigation.navigate('Home',{screen:"Settings"})}
              />
             <TouchableRipple style={{padding:10}} onPress={()=>set_dark_them(dark_them==true?false:true)}>
               <View style={styles.view_section}>
               <Text>
                     Dark them
                 </Text>
               <View pointerEvents="none">
               <Switch value={dark_them} />
               </View>
               </View>
             </TouchableRipple>
          </Drawer.Section>
          <Drawer.Section title="About">
          
        <DrawerItem
               style={{backgroundColor:"rgb(111,30,222)"}}
                onPress={()=>props.navigation.navigate('Home',{screen:'Contact'})}
                labelStyle={{color:"white"}}
                label="Contact us"
                icon={()=>(
                    <Avatar.Image 
                style={{backgroundColor:"white"}}
                 size={30}
                 source={require('../assets/contact-us.png')}
             />
                )}
            />

            <DrawerItem
                onPress={()=>props.navigation.navigate('Home',{screen:"Developer"})}
                label="Developer"
                icon={()=>(
                    <Avatar.Image 
             style={{backgroundColor:"white"}}
                 size={30}
                 source={require('../assets/cloud-coding.png')}
             />
                )}
            />
          </Drawer.Section>
      </DrawerContentScrollView>
     </View>
    )
}

const styles= StyleSheet.create({
    view_section:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    }
})