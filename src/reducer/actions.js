import { ADD_TO_CART, DELETE_PRODUCT } from "./actionTypes";

export default function actions(id, act=null){
    switch(act){

        case 'add':
            return{
                type: ADD_TO_CART,
                id
            };
        case 'delete':
            return{
                type: DELETE_PRODUCT,
                id
            };
        default:
            return "NONE";

    }
}
