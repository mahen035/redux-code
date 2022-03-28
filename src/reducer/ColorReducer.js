const initialState ={
    color:[]
}

const ColorReducer = (state = initialState, action)=>{
    const newState = {...state};
    console.log('New State type ', typeof newState.color);
    console.log('ADDING COLOR NEWSTATE....',newState);
    switch(action.type){
        case 'ADD_COLOR':
           
           return{
            newState,
            color:[newState.color, action.payload]
            
           }
            //break;
        case 'REMOVE_COLOR':
            console.log('Removing color');
            let val = newState.color.flat(2);
            console.log('NEWSTATEEE_COLOR_flat', val);
           // let val1 = val.flat();
           // console.log('NEWSTATEEE_COLOR_flat111', val1);
            console.log('PAYLOAD', action.payload);
            return{
                newState,
                //color:[newState.color, action.payload]
               // let val = newState.color.flat();
                color:[val.filter(value=>value!== action.payload)]
                            
               }
               break;
        default:
            return newState;    
    }
   // return newState;
   //console.log('NewState ',newState.color.favColors);
    
}
export default ColorReducer;

// take an array of colors as your state
// add values to the array when you check the checkbox
// use filter method to remove values when the checkbox is unchecked