import './signup.css';
import { useForm } from 'react-hook-form'
import UseForm from './UseForm';
import validate from './validate';
import { Link } from 'react-router-dom';

const Signup= () => {
    const { handlechange, values, handleSubmit, errors } = UseForm(validate);
    return (
        <div className='flex-container' >
        
            <form>
                <h1 className='input-value'>Get started with usetoday!Create your account </h1>
                <div className='input-value'>
                    <label htmlFor='username' className='input-lable' />username
                    <input
                        id='username'
                        type='text'
                        name='username'
                        placeholder='enter your user name'
                        value={values.username}

                        onChange={handlechange} />
                        
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='input-value'>
                    <label htmlFor='email' className='input-lable' />Email
                    <input
                        id='email'
                        type='email'
                        name='email'
                        placeholder='enter your email'
                        value={values.email}
                        onChange={handlechange} />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='input-value'>
                    <label htmlFor='password' className='input-lable' />password
                    <input
                        id='password'
                        type='password'
                        name='password'
                        placeholder='enter your password'
                        value={values.password}
                        onChange={handlechange} />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className='input-value'>
                    <label htmlFor='password2' className='input-lable' /> confirm password
                    <input
                        id='password2'
                        type='password'
                        name='password2'
                        placeholder='enter your confirm password'
                        value={values.password2}
                        onChange={handlechange} />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <div className='input-value'>
                    <button
                        type='submit'
                        onClick={handleSubmit}
                    >Sign Up</button>
                </div>
                <div className='input-value'><p>Already have an account? Login<Link to="/Login">Here</Link></p></div>
            </form>
        </div>
    );
}

export default Signup;




