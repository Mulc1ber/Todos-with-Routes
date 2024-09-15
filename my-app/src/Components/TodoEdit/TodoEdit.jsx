import React, { useEffect, useRef, useState } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import { useGetTodo, useRequestUpdateTodo } from '../../Hooks';
import styles from './TodoEdit.module.css';
import { Input } from '../Input/Input';
import { Loader } from '../Loader/Loader';

export const TodoEdit = () => {
    const [todo, setTodo] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const { requestUpdateTodo } = useRequestUpdateTodo();
    const { getTodo } = useGetTodo();

    const refInput = useRef();
    const navigate = useNavigate();
    const match = useMatch({
        path: 'task/:id/edit',
        exact: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        requestUpdateTodo(match?.params.id, todo).then((response) => {
            console.log('response', response);

            if (response.ok) {
                navigate('/task/' + match?.params.id);
            }
        });
    };

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setTodo((prevState) => ({ ...prevState, [name]: value }));
    };

    useEffect(() => {
        getTodo(match?.params.id, setTodo, setIsLoading);
    }, [match?.params.id, setIsLoading, setTodo]);

    useEffect(() => {
        refInput.current?.focus();
    }, [isLoading]);

    if (!match) {
        navigate('/task-not-found');
    }

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    <h3 style={{ textAlign: 'center' }}>Редактирование Задачи</h3>
                    <div style={{ marginBottom: '10px' }}>
                        <button
                            className={styles.btnBack}
                            onClick={() => navigate('/task/' + match.params.id)}
                        >
                            Назад
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <Input
                            type="text"
                            name="title"
                            value={todo?.title}
                            onChange={handleChange}
                            refInput={refInput}
                        />
                        <button type="submit">Сохранить изменения</button>
                    </form>
                </div>
            )}
        </>
    );
};
