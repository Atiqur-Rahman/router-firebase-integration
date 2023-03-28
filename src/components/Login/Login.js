import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle().then(() => {
            navigate(from, { replace: true });
        });
    };

    return (
        <div>
            <h3>Please Login</h3>
            <button onClick={handleGoogleSignIn} style={{ margin: '20px' }}>
                Google Sign In
            </button>
            <form>
                <input type="email" name="" id="" placeholder="Your Email" />
                <br />
                <input type="password" name="" id="" placeholder="Your password" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;
