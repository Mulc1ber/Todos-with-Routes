import { useRequestGetTodos } from '../../Hooks';
import { AddTodo } from '../AddTodo/AddTodo';
import { Search } from '../Search/Search';
import { Sort } from '../Sort/Sort';
import styles from './Home.module.css';
import { TodoList } from '../TodoList/TodoList';
import { useEffect, useState } from 'react';

export const Home = () => {
    const [todoList, setTodoList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);

    const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

    const { requestGetTodos } = useRequestGetTodos();

    useEffect(() => {
        requestGetTodos(setTodoList, setIsLoading);
    }, [refreshTodosFlag, setTodoList, setIsLoading]);

    return (
        <>
            <div className={styles.todos}>
                <div className={styles.wrapPanel}>
                    <AddTodo refreshTodos={refreshTodos} />
                </div>

                <div className={styles.wrapPanel}>
                    <Search
                        todoList={todoList}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        setTodoList={setTodoList}
                        setIsLoading={setIsLoading}
                    />
                </div>

                <Sort
                    setTodoList={setTodoList}
                    refreshTodos={refreshTodos}
                    setIsLoading={setIsLoading}
                />

                <TodoList todoList={todoList} isLoading={isLoading} />
            </div>
        </>
    );
};
