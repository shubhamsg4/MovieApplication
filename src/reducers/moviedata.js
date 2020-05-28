import {MOVIEDATA,MOVIEDATA_ERROR, ACTIONTEST} from '../action/type';
const initialState={
    movieProfiles:[],
    error:{},
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
        case ACTIONTEST:
            return{
                ...state,
                testvalue:payload

            }
       
    default:
        return state;

}
}