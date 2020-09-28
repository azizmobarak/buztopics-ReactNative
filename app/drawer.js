import React, { useState } from 'react';
import {DrawerContent,DrawerItemList,DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View,StyleSheet } from 'react-native';
import {Avatar,IconButton,Button,Text,Drawer, TouchableRipple,Switch} from 'react-native-paper';
import { TouchableHighlight } from 'react-native';

export default function Drawer_Content(props) {


    const [dark_them,set_dark_them]=useState(false)

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
                  onPress={()=>props.navigation.navigate('Home',{screen:"Search"})}
              />
               <DrawerItem
                  label="Settings"
                  icon={()=>(
                    <Avatar.Icon color="white" size={30} icon="settings"/>
                  )}
                  onPress={()=>props.navigation.navigate('Home',{screen:"Settings"})}
              />
          </Drawer.Section>
          <Drawer.Section title="preferences">
             <TouchableRipple onPress={()=>set_dark_them(dark_them==true?false:true)}>
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
    justifyContent:"space-between"
    }
})