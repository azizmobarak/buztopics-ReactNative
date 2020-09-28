import 'react-native-gesture-handler';
import React from 'react';
import Search from './app/search';
import Settings from './app/settings';
import Home from './app/home';
import {NavigationContainer} from '@react-navigation/native';
import Contactus from './app/contactus';



import {createDrawerNavigator} from '@react-navigation/drawer';
import Drawer_Content from './app/drawer';

const drawer=createDrawerNavigator();

 
export default function App() {
return (
    <DrawerApply/>
  );
}

const DrawerApply=()=>(
  <NavigationContainer>
      <drawer.Navigator drawerContent={(props)=><Drawer_Content {...props}/>} initialRouteName="Home">
      <drawer.Screen name="Home"
       component={Home}
         options={
           {title:"BuzTopics",}
         }
  
       />
      <drawer.Screen name="Settings" component={Settings} />
      <drawer.Screen name="Search" component={Search} />
      <drawer.Screen name="Contact" component={Contactus}/>
      </drawer.Navigator>
  </NavigationContainer>
)

