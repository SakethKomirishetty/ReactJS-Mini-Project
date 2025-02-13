import React from 'react';
import '../signin/Signin.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { userLoginThunk } from '../../redux/slices/userLoginSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isPending, currentUser, loginStatus } = useSelector(state => state.userLogin);

  function onLoginFormSubmit(data) {
    dispatch(userLoginThunk(data));
  }

  useEffect(() => {
    if (loginStatus) {
      if (currentUser.userType === 'user') {
        navigate('/user-profile');
      } else if (currentUser.userType === 'author') {
        navigate('/author-profile');
      }
    }
  }, [loginStatus, currentUser, navigate]);

  return (
    <div className="container1">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card shadow">
            <div className="card-title text-center border-bottom">
              <h2 className="p-3">Signin</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(onLoginFormSubmit)}>
                {/* Login as */}
                <div className="mb-4">
                  <label className="me-3" htmlFor="userType">
                    Login as  
                  </label>
                  <div className="form-check form-check-inline">
                    <br></br>
                    <input
                      className="form-check-input"
                      type="radio"
                      id="author"
                      value="author"
                      {...register('userType', { required: 'Select a user type' })}
                    />
                    <label className="form-check-label" htmlFor="author">Author</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="user"
                      value="user"
                      {...register('userType', { required: 'Select a user type' })}
                    />
                    <label className="form-check-label" htmlFor="user">User</label>
                  </div>
                  {errors.userType && <p className="text-danger fs-5">{errors.userType.message}</p>}
                </div>
                {/* Username */}
                <div className="mb-4">
                  <label className="form-label" htmlFor="username">Username</label>
                  <input
                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    type="text"
                    id="username"
                    {...register('username', {
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
                {/* Password */}
                <div className="mb-4">
                  <label className="form-label" htmlFor="password">Password</label>
                  <input
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    type="password"
                    id="password"
                    {...register('password', {
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
                {/* Submit Button */}
                <div className="text-end">
                  <button
                    type="submit"
                    className="textColor"
                    style={{ backgroundColor: 'var(--dark-maroon)' }}
                  >
                    Login
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

export default Signin;

// import '../signin/Signin.css';
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useDispatch, useSelector } from 'react-redux';
// import { userLoginThunk } from '../../redux/slices/userLoginSlice';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Signin() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isPending, currentUser, loginStatus } = useSelector(state => state.userLogin);

//   function onLoginFormSubmit(data) {
//     dispatch(userLoginThunk(data));
//   }

//   useEffect(() => {
//     if (loginStatus) {
//       if (currentUser.userType === 'user') {
//         navigate('/user-profile');
//       } else if (currentUser.userType === 'author') {
//         navigate('/author-profile');
//       }
//     }
//   }, [loginStatus, currentUser, navigate]);

//   return (
//     <div className="container1" >
//       <div className="row justify-content-center mt-5">
//         <div className="col-lg-4 col-md-6 col-sm-6">
//           <div className="card shadow" style={{ backgroundColor: '#212121', color: '#fff' }}>
//             <div className="card-title text-center border-bottom" style={{ backgroundColor: '#343a40' }}>
//               <h2 className="p-3">Signin</h2>
//             </div>
//             <div className="card-body" style={{ padding: '2rem' }}>
//               <form onSubmit={handleSubmit(onLoginFormSubmit)}>
//                 {/* Login as */}
//                 <div className="mb-4">
//                   <label className="form-label" htmlFor="userType" style={{ color: '#fff' }}>
//                     Login as  
//                   </label>
//                   <div className="form-check form-check-inline">
//                     <br></br>
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       id="author"
//                       value="author"
//                       {...register('userType', { required: 'Select a user type' })}
//                     />
//                     <label className="form-check-label" htmlFor="author" style={{ color: '#fff' }}>Author</label>
//                   </div>
//                   <div className="form-check form-check-inline">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       id="user"
//                       value="user"
//                       {...register('userType', { required: 'Select a user type' })}
//                     />
//                     <label className="form-check-label" htmlFor="user" style={{ color: '#fff' }}>User</label>
//                   </div>
//                   {errors.userType && <p className="text-danger fs-5">{errors.userType.message}</p>}
//                 </div>
//                 {/* Username */}
//                 <div className="mb-4">
//                   <label className="form-label" htmlFor="username" style={{ color: 'green' }}>Username</label>
//                   <input
//                     className={`form-control ${errors.username ? 'is-invalid' : ''}`}
//                     type="text"
//                     id="username"
//                     {...register('username', {
//                       required: 'Username is required',
//                       minLength: {
//                         value: 4,
//                         message: 'Username must be at least 4 characters long',
//                       },
//                       maxLength: {
//                         value: 10,
//                         message: 'Username cannot exceed 10 characters',
//                       },
//                     })}
//                     style={{ backgroundColor: '#343a40', border: 'none', color: '#fff' }}
//                   />
//                   {errors.username && <div className="invalid-feedback fs-5">{errors.username.message}</div>}
//                 </div>
//                 {/* Password */}
//                 <div className="mb-4">
//                   <label className="form-label" htmlFor="password" style={{ color: 'green ' }}>Password</label>
//                   <input
//                     className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//                     type="password"
//                     id="password"
//                     {...register('password', {
//                       required: 'Password is required',
//                       minLength: {
//                         value: 4,
//                         message: 'Password must be at least 4 characters long',
//                       },
//                       maxLength: {
//                         value: 10,
//                         message: 'Password cannot exceed 10 characters',
//                       },
//                     })}
//                     style={{ backgroundColor: '#343a40', border: 'none', color: '#fff' }}
//                   />
//                   {errors.password && <div className="invalid-feedback fs-5">{errors.password.message}</div>}
//                 </div>
//                 {/* Submit Button */}
//                 <div className="text-end">
//                   <button
//                     type="submit"
//                     className="textColor"
//                     style={{ backgroundColor: 'var(--dark-maroon)' }}
//                   >
//                     Login
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signin;
