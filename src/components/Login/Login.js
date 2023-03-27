import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h3>Please Login</h3>
            <button onClick={signInWithGoogle} style={{ margin: '20px' }}>
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
