import React, { useEffect, useState } from 'react';
import Todo from '../Components/Todo'
import TodoForm from '../Components/TodoForm'

function Home(props) {
    const [todos, setTodos] = useState([]);


    const addTodo = async (text) => {
        const newTodos = [...todos, { text }]
        setTodos(newTodos)
    }




    // console.log(todos)
    return (
        <div>
            <div className='todoList'>
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                    />

                ))}

                <TodoForm addTodo={addTodo}></TodoForm>
            </div>

        </div>

    );

}

export default Home;