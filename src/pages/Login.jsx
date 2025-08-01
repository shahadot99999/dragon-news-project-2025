import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

 
const Login = () => {

    const {userLogin, setUser}= useContext(AuthContext)

    const [error, setError]= useState({});
      const location = useLocation();
      const navigate = useNavigate();
    //   console.log(location);


    const handleSubmit= (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({email, password});
        userLogin(email, password)
        .then(result =>{
            const user = result.user;
            setUser(user);
            navigate(location?.state ? location.state : "/");
        })
            .catch((err) => {
                
               setError({...error, login:err.code});
               
            });
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-10">
                <div className="card-body">
                    <h2 className="text-2xl font-semibold text-center">Login Your Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                            name="email"
                            className="input input-bordered" placeholder="Email" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                className="input input-bordered"
                                placeholder="Password"
                                required
                            />

                            {/* Error message appears first */}
                            {error.login && (
                                <div className="text-sm text-red-600 mb-1">
                                    {error.login}
                                </div>
                            )}

                            {/* Forgot password appears below error */}
                            <div className="label">
                                <a className="link link-hover label-text-alt">Forgot password?</a>
                            </div>
                        </div>
                    
                        <button type="submit" className="btn btn-neutral mt-4 w-full">Login</button>
                    </form>
                    <p className="text-center font-semibold">
                        Don't Have an Account ? <Link className="text-red-500" to="/auth/register">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;