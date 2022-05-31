import React, { Component } from 'react';
import "./App.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  };

  handleChange = e => {
    const value = e.target.value;
    // console.log(value);
    this.setState({ item: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.id)
    const perItemValue = {
        id: this.state.id,
        title: this.state.item
    }
    const updatedValue = [...this.state.items,perItemValue]
    this.setState({
        items:updatedValue,
        id:uuidv4(),
        item: "",
        editItem: false
    }, ()=>{
      const storage = localStorage.setItem("todo-item", JSON.stringify(this.state));
    })
    
  };

  handleClear = ()=>{
    this.setState({items:[]},()=>{
      localStorage.removeItem('todo-item');
    });

  }

  handleDelete = userId=>{
    const filteredItems = this.state.items.filter(item=>{
      if(item.id !==userId){
        return item;
      }
    })

    this.setState({items:filteredItems}, ()=>{
      const storage = localStorage.setItem("todo-item", JSON.stringify(this.state));
    })
  }

  handleEdit = userId=>{
    const filteredItems = this.state.items.filter(item=>{
      if(item.id !==userId){
        return item;
      }
    })

    const editedItems = this.state.items.find(item=>{
      if(item.id===userId){
        return item;
      }
    })
    console.log(editedItems);
    this.setState({
      items:filteredItems,
      item:editedItems.title,
      id:userId,
      editItem:true
    }, ()=>{
      const storage = localStorage.setItem("todo-item", JSON.stringify(this.state));
      console.log(storage)
    })
  }

  handleCancel = ()=>{
    const canceledValues = this.state.items;
    this.setState({
      items:canceledValues
    })
  }

  componentDidMount(){
    let data = localStorage.getItem('todo-item');
    data = JSON.parse(data);
    this.setState({...data})
  }

  render() { 
    return (
      <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">todo input</h3>
          <TodoInput 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            value={this.state.item}
            editItem={this.state.editItem}
            handleCancel={this.handleCancel}
          />
          <TodoList 
            items={ this.state.items }
            handleClear={this.handleClear}
            handleDelete={this.handleDelete}
            handleEdit = {this.handleEdit}
            editItem={this.state.editItem}
            />
        </div>
      </div>
    </div>
    );
  }
}
 
export default App;


