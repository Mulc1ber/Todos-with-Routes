export const useGetTodo = () => {
    const getTodo = (id, setTodo, setIsLoading) => {
        setIsLoading(true);
        fetch(`http://localhost:3005/todos/${id}`)
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                console.log('getTodo', response);
                setTodo(response);
            })
            .catch((err) => console.log('err', err))
            .finally(() => setIsLoading(false));
    };

    return {
        getTodo,
    };
};
