import styles from './Input.module.css';

export const Input = ({ refInput, ...rest }) => {
    return <input ref={refInput} {...rest} className={styles.input} />;
};
