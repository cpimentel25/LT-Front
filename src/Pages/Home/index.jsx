import { useState } from 'react';
import Company from '../../Components/Company';
import Inventory from '../../Components/Created';
import CompanyInventory from '../../Components/ListData';
import DataCompany from '../../Components/DataCompany';

import './styles.scss';

const RegisterCompany = () => {
  const [select, setSelect] = useState('');

  const newSelection = (newSelection) => {
    setSelect(newSelection);
  };

  return (
    <main className='register'>
      {select === '' ? (
        <section className='register-select'>
          <div className='register-select-buttons'>
            <button
              className='register-select-buttons_btn'
              onClick={() => setSelect('company')}
            >
              Register Company
            </button>
            <button
              className='register-select-buttons_btn'
              onClick={() => setSelect('created')}
            >
              Register Inventory
            </button>
            <button
              className='register-select-buttons_btn'
              onClick={() => setSelect('data')}
            >
              Data by Company
            </button>
            <button
              className='register-select-buttons_btn'
              onClick={() => setSelect('inventory')}
            >
              Company Inventory
            </button>
          </div>
        </section>
      ) : null}
      {select === 'company' ? <Company newSelect={newSelection} /> : null}
      {select === 'created' ? <Inventory newSelect={newSelection} /> : null}
      {select === 'data' ? <DataCompany newSelect={newSelection} /> : null}
      {select === 'inventory' ? <CompanyInventory newSelect={newSelection} /> : null}
    </main>
  );
};

export default RegisterCompany;
