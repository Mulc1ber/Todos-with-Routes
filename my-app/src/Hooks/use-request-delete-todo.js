export const useRequestDeleteTodo = () => {
    const requestDeteleTodo = async (id) => {
        try {
            return await fetch(`http://localhost:3005/todos/${id}`, {
                method: 'DELETE',
            });
        } catch (err) {
            console.log('err', err);
        }
    };

    return {
        requestDeteleTodo,
    };
};
