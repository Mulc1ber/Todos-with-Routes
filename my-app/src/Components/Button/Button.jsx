import React from 'react';
import styles from './Button.module.css';

export const Button = ({ children, hasSort, ...rest }) => {
    return (
        <button className={hasSort ? styles.activeSort : styles.btn} {...rest}>
            {children}
        </button>
    );
};
