import { useState } from 'react';
import { loginUser } from '../../../features/petitions';
import { useNavigate } from 'react-router-dom';

import './styless.scss';

const LoginForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await loginUser(form);
    console.log('send data for: ', form);
    navigate('/home');
  }

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  return (
    <section className='loginform'>
      <form onSubmit={handleSubmit} className='loginform-form'>
        <h3 className='loginform-form_title'>Login form</h3>
        <div>
          <input
            className='loginform-form_input'
            id='email'
            type='email'
            placeholder='Email'
            required
            onChange={handleChange}
          />
          <input
            className='loginform-form_input'
            id='password'
            type='password'
            placeholder='Password'
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <button className='loginform-form_btnsubmit' type='submit' value='submit'>
            Login
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
