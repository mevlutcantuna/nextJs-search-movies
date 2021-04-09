import {GETSEARCHMOVIES, HANDLECHANGE} from "./SearchConstant";

const INITIALSTATE = {
    search:[],
    name:'galaxy',
    year:'2012',
    type:'Movie',
}

export const SearchReducer = (state=INITIALSTATE,action) => {
    switch (action.type){
        case HANDLECHANGE.HANDLE_NAME:
            return {...state,name: action.payload};
        case HANDLECHANGE.HANDLE_TYPE:
            return {...state,type: action.payload};
        case HANDLECHANGE.HANDLE_YEAR:
            return {...state,year:action.payload};
        case GETSEARCHMOVIES.GET_MOVIES_SUCCESS:
            console.log(action.payload.data.Search)
            return {...state,search: action.payload.data.Search};
        default:
            return state;
    }
}