import React, { useState } from 'react';
import '../signup/Signup.css';
import { useForm } from "react-hook-form";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  async function onSignUpFormSubmit(userObj) {
    let res;
    // http post req to user-api
    if (userObj.userType === 'user') {
      res = await axios.post('http://localhost:4000/user-api/user', userObj);
    }
    if (userObj.userType === 'author') {
      res = await axios.post('http://localhost:4000/author-api/user', userObj);
    }
    if (res.data.message === 'User created' || res.data.message === 'Author created') {
      // navigate to sign
      navigate("/signin");
    } else {
      setErr(res.data.message);
    }
  }

  return (
    <div className="container1 ">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card shadow">
            <div className="card-title text-center border-bottom">
              <h2 className="p-3">Signup</h2>
            </div>
            <div className="card-body">

              {/* user register error message */}
              {/* {err.length != 0 && <p className="text-danger text-center">{err}</p>} */}
              <form onSubmit={handleSubmit(onSignUpFormSubmit)}>
                {/* radio */}
                <div className="mb-4">
                  <label
                    htmlFor="user"
                    className="form-check-label me-3"
                    style={{
                      fontSize: "1.2rem",
                      color: "var(--light-dark-grey)",
                    }}
                  >
                    Register as
                  </label>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="author"
                      value="author"
                      {...register("userType", { required: 'Select a user type' })}
                    />
                    <label
                      htmlFor="author"
                      className="form-check-label"
                      style={{ color: "var(--dark-green)" }}
                    >
                      Author
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="user"
                      value="user"
                      {...register("userType", { required: 'Select a user type' })}
                    />
                    <label
                      htmlFor="user"
                      className="form-check-label"
                      style={{ color: "var(--dark-green)" }}
                    >
                      User
                    </label>
                  </div>
                  {errors.userType && <p className="text-danger fs-5">{errors.userType.message}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    id="username"
                    {...register("username", {
                      required: 'Username is required',
                      minLength: {
                        value: 4,
                        message: 'Username must be at least 4 characters long',
                      },
                      maxLength: {
                        value: 10,
                        message: 'Username cannot exceed 10 characters',
                      },
                    })}
                  />
                  {errors.username && <div className="invalid-feedback fs-5">{errors.username.message}</div>}
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    id="password"
                    {...register("password", {
                      required: 'Password is required',
                      minLength: {
                        value: 4,
                        message: 'Password must be at least 4 characters long',
                      },
                      maxLength: {
                        value: 10,
                        message: 'Password cannot exceed 10 characters',
                      },
                    })}
                  />
                  {errors.password && <div className="invalid-feedback fs-5">{errors.password.message}</div>}
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    {...register("email", { required: 'Email is required' })}
                  />
                  {errors.email && <div className="invalid-feedback fs-5">{errors.email.message}</div>}
                </div>

                <div className="text-end">
                  <button
                    type="submit"
                    className="textColors"
                    //style={{ backgroundColor: "var(--dark-maroon)" }}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
