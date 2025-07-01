
const defaultState = {
    laptops: 0
};

const reducer = (state = defaultState, {type,payload}: {type: string, payload: number}) => {
    if(type==="increment"){
        return {
            laptops: state.laptops + payload
        };
    };
    if(type==="decrement"){
        return {
            laptops: state.laptops - payload
        };
    };
    if(type==="reset"){
        return {
            laptops: 0
        };
    };
    return state;
}

export default reducer;
