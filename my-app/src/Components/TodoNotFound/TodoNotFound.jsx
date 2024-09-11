import React from 'react';
import { Link } from 'react-router-dom';

export const TodoNotFound = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Задача не найдена</h3>
            <Link to="/">Вернуться на главную</Link>
        </div>
    );
};
