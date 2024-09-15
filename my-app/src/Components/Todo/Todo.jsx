import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRequestDeleteTodo, useGetTodoById } from '../../Hooks';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import styles from './Todo.module.css';

export const Todo = () => {
    const [todo, setTodo] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const { getTodoById } = useGetTodoById();
    const { requestDeteleTodo } = useRequestDeleteTodo();

    const navigate = useNavigate();
    const params = useParams();

    const handleEdit = () => {
        navigate('/task/' + params.id + '/edit');
    };

    const handleDelete = () => {
        requestDeteleTodo(params.id).then((response) => {
            if (response.ok) {
                navigate('/');
            }
        });
    };

    useEffect(() => {
        getTodoById(params.id, setIsLoading)
            .then((response) => {
                if (!response.ok) {
                    navigate('/task-not-found');
                } else {
                    return response.json();
                }
            })
            .then((data) => {
                setTodo(data);
            })
            .finally(() => setIsLoading(false));
    }, [params.id, setTodo, navigate]);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div style={{ marginBottom: '10px' }}>
                        <button className={styles.btnBack} onClick={() => navigate('/')}>
                            Назад
                        </button>
                    </div>
                    <div className={styles.todo}>
                        <div>{todo.title}</div>
                        <div className={styles.wrapButtons}>
                            <Button onClick={handleDelete}>Удалить</Button>
                            <Button onClick={handleEdit}>Изменить</Button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
