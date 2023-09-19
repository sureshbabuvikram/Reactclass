 export default function ReducerAction(state, action){
    console.log("reducer block");
    console.log("state", state);
    console.log("action",action);
    switch (action.type) {
        case "ADD":
            return {count:state.count + action.payload}  // 0 + 5 = 5   2) 5 + 5 =10
        case "SUB":
            return {count:state.count - action.payload }   //10 - 2 = 8  6        
    
        default:
            return state
            
    }
 }

//  ReducerAction(0, {type:"",payload:""});

//  action->{type:"",payload:""}
