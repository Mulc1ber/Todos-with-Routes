export const useRequestUpdateTodo = () => {
    const requestUpdateTodo = async (id, todo) => {
        try {
            return await fetch(`http://localhost:3005/todos/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json;charset=utf-8' },
                body: JSON.stringify({ title: todo.title }),
            });
        } catch (err) {
            console.log('err', err);
        }
    };

    return {
        requestUpdateTodo,
    };
};
