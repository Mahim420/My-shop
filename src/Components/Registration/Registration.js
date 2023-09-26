import React, { useContext, useState } from "react";
import gIcon from "../../images/icons/google.png";
import fIcon from "../../images/icons/fb.png";
import { AuthContext } from "../../UserContext/UserContext";
import { Link } from "react-router-dom";

const Registration = () => {

  const {createUser,updateUserProfile} = useContext(AuthContext);

  const [error, setError] = useState(null);
  const [accept, setAccept] = useState(false);

  const handleTerm = (event) =>{
    setAccept(event.target.checked)
  };

    const handleSubmit = (event) =>{
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const password = form.password.value;
      const email = form.email.value;
      const confirm = form.confirm.value;
      console.log(name, password, email);

      if(password !== confirm){
        setError('Password did not match')
        return;
      }

      createUser(email, password)
      .then(res =>{
        const user = res.user;
        console.log(user);
        form.reset();
        handleUpdateUserProfile(name);
      })
      .catch(error => console.error(error))

    }

    const handleUpdateUserProfile = (name) =>{
      const profile = {
        displayName:name
      }
      updateUserProfile(profile)
      .then(()=>{})
      .catch(error => console.error(error));
    }

  return (
    <div className="flex justify-center items-center h-[600px]">
      <div className="flex items-center rounded-lg px-3 border border-3 w-1/2">
        <div className="card w-96 bg-black/70 mt-4 text-primary-content">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <h1 className="text-2xl font-bold font-sans text-center">
                Create an Acoount
              </h1>
              <div className="mt-4">
                <h2 className=" font-serif">Name</h2>
                <p>
                  <input
                    className="bg-transparent w-full mt-2 rounded-lg p-2 border-2"
                    placeholder="Enter your name"
                    type="text"
                    name="name"
                  />
                </p>
              </div>

              <div className="mt-4">
                <h2 className=" font-serif">E-mail</h2>
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
                <h2 className=" font-serif">Password</h2>
                <p>
                  <input
                    className="bg-transparent w-full mt-2 rounded-lg p-2 border-2"
                    placeholder="Password"
                    type="password"
                    name="password"
                  />
                </p>
              </div>

              <div className="mt-4">
                <h2 className=" font-serif">Confirm Password</h2>
                <p>
                  <input
                    className="bg-transparent w-full mt-2 rounded-lg p-2 border-2"
                    placeholder="Re-enter Password"
                    type="password"
                    name="confirm"
                  />
                </p>
              </div>

              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text text-white">
                   <Link to='/terms'>
                      Accept terms & condition
                   </Link>
                  </span>
                  <input
                    type="checkbox"
                    onClick={handleTerm}
                    className="checkbox checkbox-secondary"
                  />
                </label>
              </div>
                <p className="text-red-600 font-bold font-sans">
                  {error}
                </p>
              <div className="card-actions mt-3">
                <button disabled={!accept} className="btn bg-yellow-500 w-full">Register Now</button>
              </div>
            </form>
          </div>
        </div>

        <div className="ml-9">
          <h1 className="text-2xl text-white font-bold text-center">Or</h1>
          <hr className="font-bold mt-3" />
          <div>
            <button className="btn mt-3 w-[300px] btn-outline btn-warning">
              <img className="w-[20px] h-[20px]" src={gIcon} alt="" />
              <p>Sign in with Google</p>
            </button>
          </div>

          <div>
            <button className="btn mt-3 w-[300px] btn-outline btn-warning">
              <img className="w-[20px] h-[20px]" src={fIcon} alt="" />
              <p>Sign in with Facebook</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
