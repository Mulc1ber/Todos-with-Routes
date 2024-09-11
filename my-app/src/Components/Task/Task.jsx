import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Todo } from '../Todo/Todo';
import { useGetTodos } from '../../Hooks';
import styles from './Task.module.css';

export const Task = ({ todoList, ...rest }) => {
    useGetTodos({ ...rest });

    const params = useParams();
    const navigate = useNavigate();

    const task = todoList.find((todo) => todo?.id === params.id);

    useEffect(() => {
        if (todoList.length > 0 && !task) {
            return navigate('/task-not-found');
        }
    }, [todoList, task, navigate]);

    return (
        <>
            {todoList.length > 0 && task ? (
                <>
                    <div style={{ marginBottom: '10px' }}>
                        <Link to="/" className={styles.btnBack}>
                            Назад
                        </Link>
                    </div>
                    <Todo key={task.id} id={task.id} title={task.title} />
                </>
            ) : (
                <div className={styles.loader}></div>
            )}
        </>
    );
};
