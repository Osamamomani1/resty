// const initialState = {
//     APIlink: [], 
//     count: 0
// }

// // Reducer Function
// export default function peopleReducer(state = initialState, action) {
//     const {type, payload} = action;
//     switch(type) {
//         case 'ADD_API':
//             const count = state.count + 1;
//             const APIlink = [...state.APIlink, payload];
//             // return the new state
//             return { count, APIlink};
//         case 'REMOVE_PERSON':
//             const decrementedCount = state.count -1;
//             const peopleWithoutPerson = state.APIlink.filter((person)=> person !== payload);
//             return {count: decrementedCount, APIlink: peopleWithoutPerson};
//             // return the new state
//         case 'EMPTY_PEOPLE':
//             return initialState;
//         default:
//             return state;
//     }
// }

// export const addAction =(name)=> {
//     return {
//         type: 'ADD_API',
//         payload: name
//     }
// }

// export const removeAction =(name)=> {
//     return {
//         type: 'REMOVE_PERSON',
//         payload: name
//     }
// }

// export const emptyAction = ()=> {
//     return {
//         type: 'EMPTY_PEOPLE'
//     }
// }

import React from 'react'

function History(props) {
   function viewResults(result){
        props.historyfunc(result);
    }
    return (
        <div>
            <ul>
               {props.history.map((item,index)=>{
                   return(<li key={index} onClick={()=>{viewResults(item.result)}}>{item.method} {item.url}</li>)
               })} 
            </ul>
        </div>
    )
}
export default History