import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button,TextInput ,Text, Avatar} from 'react-native-paper'
import { Colors } from 'react-native/Libraries/NewAppScreen'

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
                    <TextInput
                     multiline={true}
                      numberOfLines={4} 
                       style={{height:150,justifyContent:"flex-start",backgroundColor:"white"}}
                       placeholder="Message" />
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
