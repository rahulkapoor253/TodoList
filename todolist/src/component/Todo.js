import React, { Component } from 'react';

const Todo = ({data, deleteTodo}) => {

    const todoList = data.length ? (
       data.map(
           todo => {
               return (
                   
                   <div key={todo.id} className="collection-item">
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                   </div>
               )
           }
       )
    ) : (
        <span className="center cyna-text"> You have no Todos Left</span>
    )

    return (
        <div className="collection">
            {todoList}
        </div>
    )

}

export default Todo;