import {AsyncStorage} from 'react-native';

initialState=async()=>{
    try{
      let val = await AsyncStorage.getItem("them");
      return val;
     }catch(err){
        return 'light'
     }
  };

export const ThemReducer=(state=initialState,action)=>{
   switch(action.type){
       case "them":
          return state = action.payload;
       default : 
          return  state;
   }
}