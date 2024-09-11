import React, { useState } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useRequestAddTodo } from '../../Hooks';

export const AddTodo = ({ refreshTodos }) => {
    const [inputTodo, setInputTodo] = useState('');
    const { isCreating, requestAddTodo } = useRequestAddTodo(refreshTodos);

    return (
        <>
            <Input
                type={'text'}
                placeholder={'Новая задача'}
                value={inputTodo}
                onChange={({ target }) => setInputTodo(target.value)}
                onKeyDown={(e) =>
                    e.key === 'Enter' ? requestAddTodo(inputTodo, setInputTodo) : null
                }
            />
            <Button onClick={() => requestAddTodo(inputTodo, setInputTodo)} disabled={isCreating}>
                Добавить задачу
            </Button>
        </>
    );
};
