import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Страница не найдена</h3>
            <Link to="/">Вернуться на главную</Link>
        </div>
    );
};
