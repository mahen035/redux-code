

export const myLogger = store =>{
    return nxt =>{
        return action =>{
            console.log('Middleware Ran..')
            return nxt(action);
        }
    }
}



