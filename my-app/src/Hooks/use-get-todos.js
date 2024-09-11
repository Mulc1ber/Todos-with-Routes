import { useEffect } from 'react';
import { useRequestGetTodos } from './use-request-get-todos';

export const useGetTodos = ({ searchValue, setTodoList, setIsLoading, refreshTodosFlag }) => {
    const { requestGetTodos } = useRequestGetTodos();

    useEffect(() => {
        if (searchValue) return;
        requestGetTodos(setTodoList, setIsLoading);
    }, [refreshTodosFlag, searchValue, setTodoList, setIsLoading]);
};
