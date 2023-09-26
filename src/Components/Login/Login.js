import React, { useContext } from "react";
import { AuthContext } from "../../UserContext/UserContext";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {

  const {loginUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (event) =>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
    .then(res =>{
      const user = res.user;
      console.log(user);
      form.reset()
      navigate(from, {replace:true})
    })
    .catch(error => console.error(error))
  }

  return (
    <div className="flex justify-center items-center h-[600px]">
      <div className="card w-96 bg-black/70 mt-4 text-primary-content">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold font-sans text-center">
              Login Your Account
            </h1>
        
            <div className="mt-4">
              <h2 className=" font-serif card-title">E-mail</h2>
              <p>
                <input
                  className="bg-transparent w-full mt-2 rounded-lg p-2 border-2"
                  placeholder="Enter your E-mail"
                  type="email"
                  name="email"
                />
              </p>
            </div>

            <div className="mt-4">
              <h2 className="card-title font-serif">Password</h2>
              <p>
                <input
                  className="bg-transparent w-full mt-2 rounded-lg p-2 border-2"
                  placeholder="Password"
                  type="password"
                  name="password"
                />
              </p>
            </div>

            <div className="card-actions mt-3">
              <button className="btn w-full">Login Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
