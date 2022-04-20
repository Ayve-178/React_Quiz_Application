import classes from '../styles/Form.module.css';

export default function Form({children, className, ...rest}) {
    return(
        <form classNme={`${className} ${classes.form} `}action="#" {...rest}>
            {children}
        </form>
    );
}