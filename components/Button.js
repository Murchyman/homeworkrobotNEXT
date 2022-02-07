import styles from '../styles/Button.module.css';

const Button = (props) => {
    return <div>
        <div className={styles.Button} onClick={props.onClick}>{props.Text}</div>
    </div>;
};

export default Button;
