import classes from '../styles/Illustration.module.css';

export default function Illustration({imgSrc}) {
    return(
        <div className={classes.illustration}>
            <img src={imgSrc} alt="Signup" />
          </div>
    );
}