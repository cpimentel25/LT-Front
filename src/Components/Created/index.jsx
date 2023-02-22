import { useEffect, useState } from 'react';
import { createInventory, getAllCompany } from '../../features/petitions';

import './styless.scss';

const Inventory = (prop) => {
  const [form, setForm] = useState({
    company: '',
    inventory: '',
  });

  const [companys, setCompanys] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createInventory(form);
    console.log('Create new inventary: ', form);
  };

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  const handleBack = (event) => {
    event.preventDefault();
    prop.newSelect('');
  };

  const getData = async () => {
    const data = await getAllCompany();
    setCompanys(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className='inventoryForm'>
      <form className='inventoryForm-form' onSubmit={handleSubmit}>
        <h3 className='inventoryForm-form_title'>Create a new Inventory</h3>
        <div className='inventoryForm-form_selectOpt'>
          <p>Select a company:</p>
          <select
            id='company'
            onChange={handleChange}
            className='inventoryForm-form-select'
            required
          >
            <option selected disabled hidden>
              Select an Company
            </option>
            {companys?.map((element) => (
              <option id='company' value={element.name}>
                {element.name}
              </option>
            ))}
          </select>
        </div>
        <div className='inventoryForm-form-dataForm'>
          <p>Input a new inventory:</p>
          <input
            className='inventoryForm-form_inputinv'
            id='inventory'
            type='text'
            placeholder='inventory'
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
          <button className='companyform-form_btnSubmit' onClick={handleBack}>
            Back
          </button>
        </div>
      </form>
    </main>
  );
};

export default Inventory;
