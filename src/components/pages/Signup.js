import signupImage from '../../assets/images/signup.svg';
import Illustration from '../Illustration';
import SignupForm from '../SignupForm';

export default function Signup() {
    return(
        <>
        <h1>Create an account</h1>
        <div class="column">
            <Illustration imgSrc={signupImage}/>
            <SignupForm />
        </div>
        </>
    );
}