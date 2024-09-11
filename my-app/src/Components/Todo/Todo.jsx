import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useRequestUpdateTodo, useRequestDeleteTodo } from '../../Hooks';
import styles from './Todo.module.css';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Link } from 'react-router-dom';

export const Todo = ({ id, title }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [titleState, setTitleState] = useState(title);
    const [prevTitle, setPrevTitle] = useState('');

    const { requestUpdateTodo } = useRequestUpdateTodo();
    const { requestDeteleTodo } = useRequestDeleteTodo();

    const refInput = useRef();

    useEffect(() => {
        if (isEditing) {
            refInput.current?.focus();
        }
    }, [isEditing]);

    const handleChange = ({ target }) => {
        console.log('Change');
        setTitleState(target.value);
    };

    const handleEdit = () => {
        console.log('Edit');
        setPrevTitle(titleState);
        setIsEditing(!isEditing);
    };

    const handleCancel = () => {
        console.log('Cancel');
        setTitleState(prevTitle);
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        console.log('Save');
        requestUpdateTodo(id, titleState);
        setIsEditing(!isEditing);
    };

    const handleDelete = () => {
        console.log('Detele');
        requestDeteleTodo(id);
    };

    return (
        <>
            <div className={styles.todo}>
                {isEditing ? (
                    <>
                        <Input
                            type="text"
                            value={titleState}
                            onChange={handleChange}
                            refInput={refInput}
                            className={styles.inputEdit}
                        />
                        <div className={styles.wrapButtons}>
                            <Button onClick={handleSave}>Сохранить</Button>
                            <Button onClick={handleCancel}>Отменить</Button>
                        </div>
                    </>
                ) : (
                    <>
                        <div>{titleState}</div>
                        <div className={styles.wrapButtons}>
                            <Link to="/" onClick={handleDelete} className={styles.btnDelete}>
                                Удалить
                            </Link>
                            <Button onClick={handleEdit}>Изменить</Button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};
