import 'react-native-gesture-handler';
import React, { createContext, useContext, useEffect, useState } from 'react';
import Home from './app/home';
import {NavigationContainer,DefaultTheme,DarkTheme} from '@react-navigation/native';
import {Provider as PaperProvider,DarkTheme as PaperDarkThem,DefaultTheme as PaperDefaultThem} from 'react-native-paper';
import {AppearanceProvider,useColorScheme} from "react-native-appearance";
import {AsyncStorage} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Drawer_Content from './app/drawer';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';
import {useSelector} from 'react-redux';
import { lightThem, secondThem } from './thems';

const drawer=createDrawerNavigator();

 
export default function App() {

return (
    <Provider store={store}>
      <AppearanceProvider>
      <DrawerApply/>
    </AppearanceProvider>
    </Provider>
  );
}


const DrawerApply=()=>{

const [backThem,setbackThem]=useState('light');

/*const getThem=async()=>{
  try{
    let val = await AsyncStorage.getItem("them");
   setThem(val);
   }catch(err){
      console.log(err);
   }
}

useEffect(()=>{
getThem();
},[AsyncStorage.getItem("them")])

console.log("sh "+them)*/

const them = useSelector(state=>state.them);
useEffect(()=>{
 setbackThem(them);
 console.log(them);
},[them]);

  return (
    <PaperProvider theme={backThem==="dark"?PaperDarkThem:PaperDefaultThem}>
    <NavigationContainer theme={backThem==="dark"?secondThem:lightThem} >
      <drawer.Navigator drawerContent={(props)=><Drawer_Content {...props}/>} initialRouteName="Home">
      <drawer.Screen name="Home"
       component={Home}
         options={
           {title:"BuzTopics",}
         }
  
       />
      </drawer.Navigator>
  </NavigationContainer>
</PaperProvider>
)}


