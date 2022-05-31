import React, { Component } from "react";



class TodoInput extends Component {
  

  render() {
      const {handleChange,handleSubmit,value,editItem,handleCancel} = this.props
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="from-control text-capitalize"
              placeholder="add a todo item"
              onChange={handleChange}
              value={value}
            />
          </div>
          <button
            type="submit"
            className={
              editItem
                ? "btn btn-success btn-block  mt-3 mx-3"
                : "btn btn-block btn-primary mt-3"
            }
          >
            {editItem ? "Edit Item" : "Add Item"}
          </button>

          {
              editItem && <button className="btn btn-danger mt-3" onClick={handleCancel}>Cancel</button>
          }
         
        </form>
      </div>
    );
  }
}

export default TodoInput;
