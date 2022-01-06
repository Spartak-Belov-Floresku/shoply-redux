const USER_CART = JSON.parse(localStorage.getItem('userCart')) ?? null;

export default function cartReducer(state=USER_CART, action){

    switch(action.type){

        case 'ADD_TO_CART':

            if(state){
                let amount = state[action.id] + 1;
                
                if(!amount)
                    amount = 1

                const userCart = {...state, [action.id]: amount};
                localStorage['userCart'] = JSON.stringify(userCart);

                return {...userCart};
            }
            
            const newCart = {[action.id]:1};
            localStorage.setItem('userCart', JSON.stringify(newCart));

            return {...newCart}

        case 'DELETE_PRODUCT':

            if(state[action.id]){
                delete state[action.id];
                localStorage['userCart'] = JSON.stringify(state);
            }

            return {...state};

        default:
            return {...state};
            
    }
}