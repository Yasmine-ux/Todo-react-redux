import React , {useState} from 'react';
import { connect } from 'react-redux';
import {addItem} from '../Action/action'


 function NewTodo(props) {
    const [newItem, setNewItem] = useState('')
    const addNewItem = () =>{
        props.addItem({
            id: Math.random(),
            text: newItem,
            isCompleted: false,
            edit:false
        })
        setNewItem('')
    }

     return (
       <header>
       <h1>To-Do App!</h1>
       
           <label>
               Add new To-Do
               <input type="text" placeholder="Entrer new Task"
               value={newItem}
               onChange={(event)=> setNewItem(event.target.value)}
               id="newTask"   />
               <button id="addbtn" onClick = {() => addNewItem()} > add</button>
 
           </label>
         
   </header>
     );
   }
   
   export default connect (null,{addItem})(NewTodo)

