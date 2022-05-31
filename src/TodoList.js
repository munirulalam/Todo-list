import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
 
    render() { 
        const {items,handleClear,handleDelete,handleEdit,editItem} = this.props
        return (
            <ul className='list-group my-5'>
                <h3 className='text-capitalize text-center'>todolist</h3>
                <TodoItem 
                    items={items}
                    handleDelete = {handleDelete}
                    handleEdit={handleEdit}
                    editItem={editItem}
                />
                <button className='btn btn-danger btn-block text-capitalize mt-5' type='button' onClick={handleClear}>
                    clear list
                </button>
            </ul>
        );
    }
}
 
export default TodoList;