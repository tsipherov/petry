import React, { useState } from 'react'
import Header from '../appHeader/Header';
import PostAddPanel from '../postAddPanel/PostAddPanel';
import PostStatusFilter from '../postFilter/PostStatusFilter';
import PostList from '../postList/PostList';
import SearchPanel from '../searchPanel/SearchPanel';
import './App.css';
import { data } from '../../data'

function App() {

  const [todos, setTodos] = useState(data)
  let lastId = todos.length + 1;

  const deleteTodoHandler = (id) => { 
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    
    setTodos(newTodos)
  }
  
  const addTodoHandler = (text) => {
    
    const newTodo = {
      id: lastId++,
      label: text,
      important: false
    }
        
    setTodos([...todos, newTodo])
    console.log(todos)
  }

  return (
    <div className="App">
      <Header />
      <div className="d-flex search-panel">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList data={todos}
        deleteTodoHandler={deleteTodoHandler}
          
      />
      <PostAddPanel addTodoHandler={ addTodoHandler }/>

    </div>
  );
}

export default App;
