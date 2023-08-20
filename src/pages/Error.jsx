// import { Link } from 'react-router-dom'

// const Error = () => {
//   return (
//     <main>
//       <div className="pg-header">
//         <div className="container">
//           {/* <h1>login form</h1> */}
//           {/* <form>
//             <div>
//               <input type="text" placeholder='name' name='username' />
//             </div>
//           </form> */}

//           <form className='form-area'>
//             <div className="group">


//               <h1>Login <span>Here</span></h1>
//               <label className='label'>User Name</label><br/>
//               <input type="text" name="name"  placeholder='something@gmail.com' className='username' />   <br />
//               <label className='label'>Password</label> <br/>
//               <input type="password" name="password" placeholder="******" className='username' /> <br />
//              <div className='btn-group'>
//                 <button type="button" className='btn-set'>Login</button>
                
//              </div> <br/>
//              <div className="acc1">
//              <label htmlFor="" className='acc2' >Already I have a accout  <Link path="/Home" >Click here</Link> </label>
//              </div> 

//             </div>
//           </form>
//         </div>
//       </div>
//       <div className="container content">
//         {/* <p>Page not found...</p> */}

//         <Link to="/" className="btn btn-primary">Go Back to Homepage</Link>
//       </div>

//    <img src='.'/>
//     </main>
//   )
// }

// export default Error



// // import React, { useState } from "react";
// // import { Redirect } from "react-router-dom";

// // const Login = () => {
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleLogin = (e) => {
// //     e.preventDefault();
// //     // Perform login logic here and set isLoggedIn to true if successful
// //     setIsLoggedIn(true);
// //   };

// //   if (isLoggedIn) {
// //     // Redirect to the dashboard if the user is logged in
// //     return <Redirect to="/Hom" />;
// //   }

// //   return (
// //     <div>
// //       <h1>Login</h1>
// //       <form onSubmit={handleLogin}>
// //         <label htmlFor="username">Username:</label>
// //         <input
// //           type="text"
// //           id="username"
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //         />
// //         <br />
// //         <label htmlFor="password">Password:</label>
// //         <input
// //           type="password"
// //           id="password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //         <br />
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;
