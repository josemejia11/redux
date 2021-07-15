import { Action } from './ngrx-fake/ngrx';
import { incrementadorAction, decrementadorAction, multiplicarAction, dividirAction, resetAction } from './contador/contador.actions';

function reducer( state = 10, action: Action ) {
    switch (action.type){

        case 'INCREMENT':
            return state += 1;

        case 'DECREMENT':
            return state -= 1;

        case 'MULTIPLICAR':
            return state * action.payload;
        
        case 'DIVIDIR':
            return state / action.payload;

        case 'RESET':
            return state = 0;
        
        default: 
            return state;
    }
}

console.log(reducer(10,incrementadorAction));

console.log(reducer(10,decrementadorAction));

console.log(reducer(10,multiplicarAction));

console.log(reducer(10,dividirAction));

console.log(reducer(10,resetAction));