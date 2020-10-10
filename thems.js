import {DarkTheme,DefaultTheme} from "@react-navigation/native";


export const lightThem={
    ...DefaultTheme,
   colors : {
    primary: 'rgb(255, 45, 85)',
    card: 'rgb(100,25,221)',
    background: 'rgb(255, 255, 255)',
    text: 'white',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    developer:'black',
    link : "blue"
    }
}

export const secondThem={
    ...DarkTheme,
    colors : {
     primary: 'rgb(255, 45, 85)',
     background: 'black',
     card: 'black',
     text: 'white',
     border: 'rgb(199, 199, 204)',
     notification: 'rgb(255, 69, 58)',
     developer:'white',
    link : "yellow"
     }
}