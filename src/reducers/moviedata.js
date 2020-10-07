import {MOVIEDATA,MOVIEDATA_ERROR, PRODUCTDATA, PRODUCTDATA_ERROR} from '../action/type';
const initialState={
    movieProfiles:[],
    error:{},
    productData:[],
    testvalue:null,
    loading:true

}
console.log('moviedata reducer')
export default function (state= initialState,action){
const {type,payload}=action;
switch(type){
 case MOVIEDATA:   
    console.log('working');
    return{
       ...state,
       movieProfiles:payload,
       loading:false
    }
    case MOVIEDATA_ERROR:
        return {
            ...state,
            error:payload,
            loading:false
    
        };
        case PRODUCTDATA:
            return{
                ...state,
    
                productData:payload,
                loading:false

            }
            case PRODUCTDATA_ERROR:
        return {
            ...state,
            error:payload,
            loading:false
    
        };
       
    default:
        return state;

}
}