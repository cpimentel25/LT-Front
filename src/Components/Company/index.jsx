import { useState } from 'react';
import { createCompany } from '../../features/petitions';

import './styles.scss';

const Company = (prop) => {
  const [form, setForm] = useState({
    name: '',
    address: '',
    NIT: '',
    phone: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createCompany(form);
    console.log('Create new company date: ', form);
    event.target.reset();
  }

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  const handleBack = (event) => {
    event.preventDefault();
    prop.newSelect('')
  };

  return (
    <main className='companyform'>
      <form className='companyform-form' onSubmit={handleSubmit}>
        <h3 className='companyform-form_title'>Input data for a new Company:</h3>
        <div className='companyform-form_dataForm'>
          <input
            className='companyform-form_input'
            id='name'
            type='text'
            placeholder='name'
            required
            onChange={handleChange}
          />
          <input
            className='companyform-form_input'
            id='address'
            type='text'
            placeholder='address'
            required
            onChange={handleChange}
          />
          <input
            className='companyform-form_input'
            id='NIT'
            type='text'
            placeholder='NIT'
            required
            onChange={handleChange}
          />
          <input
            className='companyform-form_input'
            id='phone'
            type='number'
            placeholder='phone'
            required
            onChange={handleChange}
          />
        </div>
        <div className='companyform-form-buttons'>
          <button
            className='companyform-form_btnSubmit'
            type='submit'
            value='submit'
          >
            Submit
          </button>
          <button
            className='companyform-form_btnSubmit'
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      </form>
    </main>
  );
};

export default Company;
