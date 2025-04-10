import { useFetchTodosQuery, useSendPostMutation } from "./store/apis/Todoapi";

const TodoList = () => {

    const {data} = useFetchTodosQuery();
    const [sendPost,results] = useSendPostMutation();
    console.log(results);

    const handleSubmit = () => {
        sendPost({
            title: 'foo99',
    body: 'bar99',
    userId: 199,
        })
    }

    return (
        <div>
            <h2>Todos</h2>
            <button onClick={() => handleSubmit()}>send</button>
            {data && data.filter(item => item.id < 12).map(item => <li key={item.id}>{item.title}</li>)}
        </div>
    )
}

export default TodoList;