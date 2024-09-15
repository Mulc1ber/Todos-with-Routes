import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, TodoNotFound, NotFound, TodoEdit, Todo } from './Components';
import styles from './App.module.css';

export const App = () => {
    return (
        <div className={styles.app}>
            <h1 className={styles.header}>Todos JSON Server</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/task/:id" element={<Todo />} />
                <Route path="/task/:id/:edit" element={<TodoEdit />} />
                <Route path="/task-not-found" element={<TodoNotFound />} />

                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" replace={true} />} />
            </Routes>
        </div>
    );
};
