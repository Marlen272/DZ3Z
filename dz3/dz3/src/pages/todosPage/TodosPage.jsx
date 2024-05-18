import React from 'react';
import Todo from "../../components/todo/Todo";

const TodosPage = () => {
    const arr =  ["todo 1", "todo 2", "todo 3"]
    return (
        <div>
            {arr.map(num=> <Todo desc={num}/>)}
        </div>
    );
};

export default TodosPage;