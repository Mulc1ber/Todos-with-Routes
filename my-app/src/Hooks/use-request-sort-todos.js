export const useRequestSortTodos = (refreshTodos) => {
    const requestSortTodos = (sortTodos, setListTodos, setIsLoading) => {
        setIsLoading(true);

        if (sortTodos) {
            refreshTodos();
            setIsLoading(false);
            return;
        }

        fetch('http://localhost:3005/todos?_sort=title&_order=asc')
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                setListTodos(response);
            })
            .finally(() => setIsLoading(false));
    };

    return {
        requestSortTodos,
    };
};
