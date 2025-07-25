import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-10">
                <div className="card-body">
                    <h2 className="text-2xl font-semibold text-center">Login Your Account</h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" className="input input-bordered" placeholder="Email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" className="input input-bordered" placeholder="Password" required />
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