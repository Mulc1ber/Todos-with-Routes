import React from 'react';
import { Link } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import styles from './TodoList.module.css';

export const TodoList = ({ todoList, isLoading }) => {
    return (
        <div className={styles.todoList}>
            {!todoList || isLoading ? (
                <Loader />
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
