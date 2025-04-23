import React from 'react';

const TodoList = () => {
    let todos = ["going", "eating","pick up"]
  return (
        <ul>
            {todos.map((todo,todoIndex) =>{
                return (
                    <li key={todoIndex}>{todo}</li>
                )
            })}

        </ul>  
        );
};

export default TodoList;