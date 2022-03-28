import './App.css';
import { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import {useSelector} from 'react-redux';
import {increment} from './action/CounterAction';
import {decrement} from './action/CounterAction';
import { useDispatch } from 'react-redux';
function App(props) {

  //const[color, setColor] = useState(null);
  /* console.log('Inside UI');
  const counter = useSelector(state=>state);
  const dispatch=useDispatch(); */
  let dispatch = useDispatch();
 const colVal = useSelector(state => state.color);
 console.log("COLVAL ", colVal.flat(2))
  useEffect(() => {
      console.log(props);
  })

  const handleChange = (e)=>{
        if(e.target.checked){
            dispatch({
              type: "ADD_COLOR", 
              payload:e.target.value
                 
            })
         }
         else{
          dispatch({
            type: "REMOVE_COLOR", 
            payload:e.target.value
               
          })
         }
  }

  return (
    <div className="App">
        
        <h1>My favorite color is: {colVal}</h1>
     
        <input type = "checkbox" name ="color" value="red" onClick={handleChange}/>Red
        <input type = "checkbox" name ="color" value="blue" onClick={handleChange}/>Blue
        <input type = "checkbox" name ="color" value="green" onClick={handleChange}/>Green
        <input type = "checkbox" name ="color" value="yellow" onClick={handleChange}/>Yellow
    </div>
  );
}

//This will subscribe to redux store changes
//Anytime store is updated, this will be called
/* const mapStateToProps = state =>{
  return{
    data: state
  }
} */

//Used to dispatch action(s) to the store
/* const mapDispatchToProps = dispatch =>{
  return{
    changeColor: (color) => dispatch({
      type: "CHANGE_COLOR", payload:color
    })
  }
} */

// It will connect a react component to a redux store
//export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
