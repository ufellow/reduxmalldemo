import * as actionTypes from './actionTypes';
const defaultState = {
    id: 0,
    products:[],
    selectGoods:[]
};

 const todo =(state=defaultState, action) =>{   
        if(action.type == actionTypes.GET_ALL_PRODUCTS){
            const newState = JSON.parse(JSON.stringify(state))
            newState.products = action.products;
            return newState;
        }
        if(action.type == actionTypes.GET_SHOPCART_PRODUCTS){
            const newState = JSON.parse(JSON.stringify(state))
            newState.selectGoods = action.selectGoods;
            return newState;
        }
        if(action.type == actionTypes.EMPTY_SHOPCART){
            console.log(action)
            const newState = JSON.parse(JSON.stringify(state))
            newState.selectGoods = [];
            newState.products = action.products;
            return newState;
        }
     if(action.type == 'ADD_ID'){
         const newState = JSON.parse(JSON.stringify(state))
         newState.id++;
         return newState;
     }
     if(action.type == 'DEC_ID'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.id--;
        return newState;
    }
    
    return state;
 }
export default todo;