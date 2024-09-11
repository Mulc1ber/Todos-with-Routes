import React from 'react';
import { Input } from '../Input/Input';
import { useRequestSearchTodos } from '../../Hooks';

export const Search = ({ searchValue, setSearchValue, setTodoList, setIsLoading }) => {
    const { requestSearchTodos } = useRequestSearchTodos();

    const handleSearchValue = ({ target }) => {
        setSearchValue(target.value);
        requestSearchTodos(target.value, setTodoList, setIsLoading);
    };

    return (
        <>
            <Input
                type={'search'}
                placeholder={'Поиск'}
                value={searchValue}
                onChange={handleSearchValue}
            />
        </>
    );
};
