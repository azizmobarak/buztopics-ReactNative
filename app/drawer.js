import React, { useState, useEffect, createContext, useContext } from 'react';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {View,StyleSheet, AsyncStorage } from 'react-native';
import {Avatar,Text,Drawer, TouchableRipple,Switch} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {themAction} from './redux/actions/themAction';
import {BannerAd3 } from '../ads';

export default function Drawer_Content(props) {


const [color,setColor]=useState(false);
 useEffect(()=>{
   changeScheme();
    },[color])
const dispatch = useDispatch();
    const changeScheme=()=>{
      if(color==true)
      {
        dispatch(themAction('dark'))
        setColor(true)
        AsyncStorage.setItem("them",'dark');
      }else{
        setColor(false)
        dispatch(themAction('light'))
        AsyncStorage.setItem("them",'light');  
      }
    }



    return (
     <View style={{flex:1}}>
      <DrawerContentScrollView {...props}>
          <View style={{flex:1,alignItems:"center"}}>
            <Avatar.Image style={{backgroundColor:'white'}} size={130} source={require('../assets/avatar.png')}/>
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
                label={()=><BannerAd3/>}
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
                  onPress={()=>props.navigation.navigate('Home',{screen:"Economy"})}
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
             <TouchableRipple 
             style={{padding:10}} 
             onPress={()=>setColor(color==true?false:true)}>
               <View style={styles.view_section}>
               <Text>
                     Dark them
                 </Text>
               <View pointerEvents="none">
               <Switch nativeID="switcher" value={color} />
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
                 source={require('../assets/contact-us.png')}/>
                )}/>

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

