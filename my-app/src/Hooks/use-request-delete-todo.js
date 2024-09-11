export const useRequestDeleteTodo = () => {
    const requestDeteleTodo = (id) => {
        fetch(`http://localhost:3005/todos/${id}`, {
            method: 'DELETE',
        }).then((rawResponse) => rawResponse.json());
    };

    return {
        requestDeteleTodo,
    };
};
