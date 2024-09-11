import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { useRequestSortTodos } from '../../Hooks';

export const Sort = ({ setTodoList, refreshTodos, setIsLoading }) => {
    const [hasSort, setHasSort] = useState(false);

    const { requestSortTodos } = useRequestSortTodos(refreshTodos);

    const handleSort = () => {
        requestSortTodos(hasSort, setTodoList, setIsLoading);
        setHasSort(!hasSort);
    };

    return (
        <div>
            <Button hasSort={hasSort} onClick={handleSort}>
                Сортировать
            </Button>
        </div>
    );
};
