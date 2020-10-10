import React from 'react';
import { StyleSheet,View,Text } from 'react-native'
import {useTheme} from '@react-navigation/native';

export default function Developer() {
    const {colors} = useTheme();
    return (
        <View 
        style={{
        backgroundColor:colors.background,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        alignItems:"center",
        marginTop:20,
        color:colors.developer,
        fontSize:16,
        fontFamily:"serif"
        }}>
            <Text>
                this app created by Aziz Mobarak
            </Text>
            <Text>
                Full stack web & mobile developer .
            </Text>
            <View
            style={{
                display:"flex",
                flexDirection:"row",
                width:"60%",
                justifyContent:"space-between",
                alignItems:"center"
            }}
            >
                <Text>
                    Github :
                </Text>
                <Text style={{color:colors.link}}>
                    Github.com/azizmobarak
                </Text>
            </View>
            <View
            style={{
                display:"flex",
                flexDirection:"row",
                width:"60%",
                justifyContent:"space-between",
                alignItems:"center"
            }}
            >
                <Text>
                    linkden:
                </Text>
                <Text style={{color:colors.link}}>
                    Aziz Mobarak
                </Text>
            </View>
            <View
            style={{
                display:"flex",
                flexDirection:"row",
                width:"60%",
                justifyContent:"space-between",
                alignItems:"center"
            }}
            >
                <Text>
                    Instagram:
                </Text>
                <Text style={{color:colors.link}}>
                    @azdeviz
                </Text>
            </View>
            <View
            style={{
                marginTop:"20%",
                flex:0.2,
                flexDirection:"column",
                width:"60%",
                justifyContent:"space-between",
                alignItems:"center"
            }}
            >
                <Text>
                    Used technologies : 
                </Text>
                <Text style={{color:colors.link}}>
                   React-Native , Redux 
                </Text>
            </View>

            <View
            style={{
                marginTop:"40%",
                flex:1,
                flexDirection:"column",
                width:"60%",
                justifyContent:"space-between",
                alignItems:"center"
            }}
            >
                <Text style={{
                    fontWeight:"bold",
                    fontSize:17
                }}>
                    All right reserved - 2020 
                </Text>
            </View>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    }
})