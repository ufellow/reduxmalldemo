import axios from 'axios';
import {getAllProductsApi} from '../api'
import * as actionTypes from './actionTypes'
export const getAllProductsAction = products => {
    const actiontype = {
        type: actionTypes.GET_ALL_PRODUCTS,
         products
    }
    return actiontype;
}
export const GetAllProducts = () => {  
        return (dispatch) => {
            axios.post(getAllProductsApi).then((res) => {
                console.log(res.data.products)
                dispatch(getAllProductsAction(res.data.products))
            }).catch((err) => {
                console.log(err);
            })
        }
    }
export const addProductsAction = selectGoods => {
        const actiontype = {
            type: actionTypes.GET_SHOPCART_PRODUCTS,
            selectGoods
        }
        return actiontype;
 }
export const SelectProducts = (arr) => {
        return (dispatch) => {
            dispatch(addProductsAction(arr))
        }
}

export const emptyShopCartAction = (products) => {
    const actiontype = {
        type: actionTypes.EMPTY_SHOPCART,
        products
    }
    return actiontype;
}
export const EmptyShopCart = (arr) => {
    return (dispatch) => {
        dispatch(emptyShopCartAction(arr))
    }
}