import React, { Component } from 'react';

class TodoItem extends Component {
    state = {  } 
    render() { 
        const {items,handleDelete,handleEdit} = this.props;
        return (
            items.map(item=>{
                return(
                    <li className='list-group-item text-capitalize d-flex justify-content-between my-2' key={item.id}>
                    <h6>{item.title}</h6>
                    <div className='todo-icon'>
                        <span className='mx-2 text-success'>
                            <i className='fas fa-pen' onClick={()=>handleEdit(item.id)}/>
                        </span>
                        <span className='mx-2 text-danger'>
                            <i className='fas fa-trash' onClick={()=>handleDelete(item.id)}/>
                        </span>
                    </div>
                </li>
                )
            })
          
        );
    }
}
 
export default TodoItem;