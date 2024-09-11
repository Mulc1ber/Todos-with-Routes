export const useRequestSearchTodos = () => {
    const requestSearchTodos = (searchValue, setListTodos, setIsLoading) => {
        setIsLoading(true);
        fetch(`http://localhost:3005/todos?q=${searchValue}`)
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                if (response.length === 0) {
                    setListTodos([]);
                } else {
                    const filteredTodos = response.filter((todo) =>
                        todo.title.toLowerCase().includes(searchValue.toLowerCase()),
                    );
                    setListTodos(filteredTodos);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    };

    return {
        requestSearchTodos,
    };
};
