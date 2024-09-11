import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TodoList.module.css';

export const TodoList = ({ todoList, isLoading }) => {
    return (
        <div className={styles.todoList}>
            {isLoading ? (
                <div className={styles.loader}></div>
            ) : (
                todoList.map(({ id, title }) => (
                    <Link key={id} to={`/task/${id}`} className={styles.linkTodo}>
                        {title}
                    </Link>
                ))
            )}
        </div>
    );
};
