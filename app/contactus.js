import React, { useState } from 'react'
import { View, StyleSheet, ToastAndroid } from 'react-native'
import { Button,TextInput ,Text, Avatar} from 'react-native-paper'
import { Textarea } from 'native-base'
import {useTheme} from '@react-navigation/native';
import { BannerAd } from '../ads';

export default function Contactus({navigation}) {

const [subject,setSubject]=useState('');
const [message,setMessage]=useState('');
const [email,setEmail]=useState('');
const {colors}=useTheme();

const sendMessage=()=>{
fetch("",{
    method:"post",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
     subject:subject,
     message:message,
     email:email
    })
})
.then(res=>res.json())
.then(data=>ToastAndroid.show(data,ToastAndroid.SHORT))
.catch(e=>ToastAndroid.show(e,ToastAndroid.SHORT))
}


    return (
        <View style={styles.container}>
        <BannerAd/>
            <View style={styles.form}>
                <View style={styles.form_elem}>
                    <TextInput 
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Email" 
                    textContentType="emailAddress" 
                    />
                </View>
                <View style={styles.form_elem}>
                    <TextInput 
                    onChange={(e)=>setSubject(e.target.value)}
                    placeholder="Subject"
                     />
                </View>
                <View style={styles.form_elem}>
                    <Textarea
                        onChange={(e)=>setMessage(e.target.value)}
                        rowSpan={4}
                        placeholder="Message"
                        placeholderTextColor="black"
                        textAlignVertical="top"
                        style={{
                            height:300,
                           backgroundColor:"white",
                            }}
                    />
                </View>
                <View style={styles.form_elem}>
                    <Button
                    onPress={()=>sendMessage()}
                    color="white"
                    contentStyle={{backgroundColor:"rgb(111,30,222)"}}
                    >
                   Send
                    </Button>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
container:{
    flex:1,
    justifyContent:"center",
    backgroundColor:"lightgray"
},
form:{
    padding:10
},
form_elem:{
    padding:5, 
}
})
