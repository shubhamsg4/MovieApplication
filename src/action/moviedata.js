import {MOVIEDATA,MOVIEDATA_ERROR,PRODUCTDATA,PRODUCTDATA_ERROR} from './type';
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
        
       // const res=await axios.get('https://aqueous-anchorage-34255.herokuapp.com/api/movievalue',value,config);
        const res = await axios.get(
          " https://testing.pogo91.com/api/online-store/category/?store_prefix=cake-shop"
        );
        console.log(res.data.category);
         
        dispatch({
            type: MOVIEDATA,
            payload:res.data.category
        });

    }
    catch(err)
    {
         dispatch({
             type:MOVIEDATA_ERROR
         })
    }
}

export const productValues =(id) => async dispatch =>{
    console.log("productValues");
    try{
        debugger;
    const res = await axios.get(
        "https://testing.pogo91.com/api/online-store/category/product/?store_prefix=cake-shop&page=1",
        {
            params: {category_id:id}
          }
      );
    //   console.log("ppppp")
    //   console.log(res.data.products);
       
      dispatch({
          type: PRODUCTDATA,
          payload:res.data.products
      });
    }
    catch(err)
    {
         dispatch({
             type:PRODUCTDATA_ERROR
         })
    }
}