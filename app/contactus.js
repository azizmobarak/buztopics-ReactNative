import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button,TextInput ,Text, Avatar} from 'react-native-paper'
import { Textarea } from 'native-base'

export default function Contactus({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <View style={styles.form_elem}>
                    <TextInput 
                    placeholder="Email" 
                    textContentType="emailAddress" 
                    style={{backgroundColor:"white"}}
                    />
                </View>
                <View style={styles.form_elem}>
                    <TextInput 
                    placeholder="Subject"
                    style={{backgroundColor:"white"}}
                     />
                </View>
                <View style={styles.form_elem}>
                    <Textarea
                        rowSpan={4}
                        placeholder="Message"
                        style={{backgroundColor:"#fff",height:300}}
                    />
                </View>
                <View style={styles.form_elem}>
                    <Button
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
    justifyContent:"center"
},
form:{
    padding:10
},
form_elem:{
    padding:5
}
})
