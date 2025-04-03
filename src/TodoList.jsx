import React from 'react';
import { useFetchTodosQuery, useSendPostMutation } from './store/apis/Todoapi';

const TodoList = () => {

    const {data, error, isLoading} = useFetchTodosQuery(undefined);
    const [sendPost,results] = useSendPostMutation();

    const handleClick = () => {
        sendPost({
            title: 'foo99',
            body: 'bar99',
            userId: 199
        })
        console.log(results);
    }

    return (
        <div>
            <h2>Todos</h2>
            {isLoading ? "LOADING..." : ''}
            {error ? " sorry not loading" : ''}
            <button onClick={() => handleClick()}>send post</button><br/>
            {data && data.map(item => <li key={item.title}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;