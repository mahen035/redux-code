export const increment=() =>{
    console.log('Inside Action');
    return {
        type:'INCREMENT'
    };
}

export const decrement=() =>{
    return {
        type:'DECREMENT'
    };
}


const INITIAL_STATE = {
	name: '',
	books: []
}

export default (state = INITIAL_STATE, action={}) => {
	switch(action.type) {
		case "SET_DATA":
			return {
				name:e.target.value
			};
		default:
			return state;
	}
};