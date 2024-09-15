export const useGetTodoById = () => {
    const getTodoById = async (id, setIsLoading) => {
        try {
            setIsLoading(true);
            return await fetch(`http://localhost:3005/todos/${id}`);
        } catch (err) {
            console.log('err', err);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        // todo,
        // isError,
        // isLoading,
        getTodoById,
    };
};
