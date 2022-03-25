const counterReducer = (data = 0, action)=>{
    console.log('Inside Reducer');
    switch(action.type){
        case 'INCREMENT':
            return data+1;
        case 'DECREMENT':
            return data+2;    
    }
}
export default counterReducer;