import React from 'react'
//import CommonHeader from './CommonHeader'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    return (
        <>
            {/* <CommonHeader /> */}
            <div className="container">
                <div id="login-row"
                    className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6 pt-5">
                        <div id="login-box" className="col-md-12 p-4">

                            <form id="login-form" className="form">

                                <h3 className="text-center text-info">Login</h3>

                                <div className="form-group">
                                    <label for="username" className="text-info">Username:</label><br />
                                    <input type="text" name="username" id="username"
                                        className="form-control" />
                                </div>
                                <br />
                                <div className="form-group">
                                    <label for="password" className="text-info">Password:</label><br />
                                    <input type="password" name="password" id="password"
                                        className="form-control" />
                                </div>
                                <br />
                                <div className="form-group">
                                    <label for="remember-me" className="text-info"><span>Remember
                                        me</span> <span><input id="remember-me" name="remember-me"
                                            type="checkbox" /></span></label><br /> <input type="submit"
                                                name="submit" className="btn btn-info btn-md" value="submit" />
                                </div>
                                <br /><br />
                                <div id="register-link" className="text-right m-2">
                                    <a href="/signup" className="text-info">Register here</a>
                                </div>
                            </form>

                            <div id="register-link" className="text-right m-2">
                                <a href="/forgot" className="text-info">Forgot Password</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login