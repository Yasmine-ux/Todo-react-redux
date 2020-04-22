import React, { useState } from 'react';
import { connect } from 'react-redux'
import { saveItem, removeItem, completeItem, editItem } from '../Action/action'

function TodoList(props) {
    const [newText, setNewText] = useState('')


    return (
        <div>
            {props.list.map((element) => (

                <section id="sectionTask">
                    {(element.edit) ? (<input onChange={(event) => setNewText(event.target.value)} type="text" value={newText} />) : (
                        <p style={{ textDecoration: (element.isCompleted) && 'line-through' }}>{element.text} </p>
                    )}

                    {(element.edit) ? (<button onClick={() => props.saveItem({ id: element.id, text: newText })}>Save </button>)

                        : (<div >
                            <button onClick={() => props.removeItem(element.id)} >Delete</button>
                            <button onClick={() => props.completeItem(element.id)}>{(element.isCompleted) ? 'Undo' : 'Complete'}</button>
                            <button onClick={() => {props.editItem(element.id); setNewText(element.text)}}>Edit </button>
                        </div>


                        )}




                </section>
            ))}


        </div>
    );
}

const mapStateProps = (state) => ({
    list: state.taskList
})


export default connect(mapStateProps, { saveItem, removeItem, completeItem, editItem })(TodoList)