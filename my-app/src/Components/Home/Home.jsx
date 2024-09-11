import { useGetTodos } from '../../Hooks';
import { AddTodo } from '../AddTodo/AddTodo';
import { Search } from '../Search/Search';
import { Sort } from '../Sort/Sort';
import styles from './Home.module.css';
import { TodoList } from '../TodoList/TodoList';

export const Home = ({
    todoList,
    setTodoList,
    searchValue,
    setSearchValue,
    isLoading,
    setIsLoading,
    refreshTodosFlag,
    setRefreshTodosFlag,
}) => {
    const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

    useGetTodos({ searchValue, setTodoList, setIsLoading, refreshTodosFlag });

    return (
        <div className={styles.todos}>
            <div className={styles.wrapPanel}>
                <AddTodo refreshTodos={refreshTodos} />
            </div>

            <div className={styles.wrapPanel}>
                <Search
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
    );
};
