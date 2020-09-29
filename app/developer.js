import React from 'react'
import { View, Text } from 'native-base'
import { StyleSheet } from 'react-native'

export default function Developer() {
    return (
        <View style={StyleSheet.container}>
            <Text>developer</Text>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    }
})