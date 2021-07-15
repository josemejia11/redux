//acciones
interface Action {
    type: string;
    payload?: any;
}

// const incrementadorAction: Action = {
//     type: 'INCREMENT'
// };

function reducer( state = 10, action: Action ) {
    // if ( action.type === 'INCREMENT' ) {
    //     return state += 1;
    // }
    switch (action.type){

        case 'INCREMENT':
            return state += 1;

        case 'DECREMENT':
            return state -= 1;

        case 'MULTIPLICAR':
            return state * action.payload;
        
        case 'DIVIDIR':
            return state / action.payload;
        
        default: 
            return state;
    }
    // return state;
}

//usar reducer 
const incrementadorAction: Action = {
    type: 'INCREMENT'
};

console.log(reducer(10,incrementadorAction));//11

const decrementadorAction: Action = {
    type: 'DECREMENT'
};

console.log(reducer(10,decrementadorAction));//9

const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
};

console.log(reducer(10,multiplicarAction));//20

const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 2
};

console.log(reducer(10,dividirAction));//5
