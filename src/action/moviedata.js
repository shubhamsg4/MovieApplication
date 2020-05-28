import {MOVIEDATA,MOVIEDATA_ERROR,ACTIONTEST} from './type';
import axios from 'axios';
//Load User
console.log('in action');
export const movieValues =() => async dispatch =>{
    console.log("action");
    const value={
        id:1,
        count:5
    }
    const config={
    headers:{
        'Content-Type':'application/json'
    }
}
    try{
        
        const res=await axios.get('https://aqueous-anchorage-34255.herokuapp.com/api/movievalue',value,config);
        console.log(res.data.data);
         
        dispatch({
            type: MOVIEDATA,
            payload:res.data.data
        });

    }
    catch(err)
    {
         dispatch({
             type:MOVIEDATA_ERROR
         })
    }
}

export const actionTest =() => async dispatch =>{
    console.log("action");
   const val=1;
    try{
         
        dispatch({
            type: ACTIONTEST,
            payload:val
        });

    }
    catch(err)
    {
         dispatch({
             type:MOVIEDATA_ERROR
         })
    }
}