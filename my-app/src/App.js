import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Task, TodoNotFound, NotFound } from './Components';
import styles from './App.module.css';

export const App = () => {
    const [todoList, setTodoList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);

    return (
        <div className={styles.app}>
            <h1 className={styles.header}>Todos JSON Server</h1>

            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            todoList={todoList}
                            setTodoList={setTodoList}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            refreshTodosFlag={refreshTodosFlag}
                            setRefreshTodosFlag={setRefreshTodosFlag}
                        />
                    }
                />
                <Route
                    path="/task/:id"
                    element={
                        <Task
                            todoList={todoList}
                            setTodoList={setTodoList}
                            searchValue={searchValue}
                            setIsLoading={setIsLoading}
                            refreshTodosFlag={refreshTodosFlag}
                        />
                    }
                />
                <Route path="/task-not-found" element={<TodoNotFound />} />

                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" replace={true} />} />
            </Routes>
        </div>
    );
};
