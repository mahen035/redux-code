import axios from "axios";

export const fetchPostAction =  async () =>{

    const promise =   await axios.get("https://jsonplaceholder.typicode.com/posts");
     return{
         type: "FETCH_POSTS",
         payload: promise.data
     }
 } 
 