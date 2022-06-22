import './Login.css';
import React from "react";


function Login() {
    return (
        <>
            <div className={"main__login"}>
                <div>
                    <h2>Login</h2>
                    <div className={"main__login__info"}>
                        <input type={"text"} placeholder={"Email"}/>
                        <input type={"password"} maxLength={"20"} placeholder={"Password"}/>
                        <button>Sign in</button>
                    </div>
                    <div className={"main__login-pas"}><a href="/email">Forgot your password?</a></div>
                    <a className={"main__login-create"} href="/register">Create Account</a>
                </div>
            </div>
        </>
    )
}

export default Login;