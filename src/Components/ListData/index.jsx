import { useEffect, useState } from 'react';
import { getAllCompany, getCompany } from '../../features/petitions';

import './styles.scss';

const CompanyInventory = (prop) => {
  const [companys, setCompanys] = useState([]);
  const [dataCompany, setDataCompany] = useState();

  const handleBack = (event) => {
    event.preventDefault();
    prop.newSelect('');
  };

  const getData = async () => {
    const data = await getAllCompany();
    setCompanys(data);
  };

  const handleSelect = async ({ target }) => {
    const { value } = target;
    const dataCompany = await getCompany(value);
    setDataCompany(dataCompany.inventorys);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className='companyinventory'>
      <section className='companyinventory-section'>
        <div>
          <h3 className='companyinventory-section-title'>Inventory Company</h3>
          <p>Select Company:</p>
          <select className='companyinventory-section-select' onChange={handleSelect}>
            <option disabled selected hidden>Select a Company</option>
            {companys?.map((element) => (
              <option value={element._id} >{element.name}</option>
            ))}
          </select>
        </div>
        <div className='companyinventory-section-list'>
          <ul className='companyinventory-section-list_data'>
            {dataCompany?.map((inv) => (
              <li className='companyinventory-section-list_data_inv'>{inv}</li>
            ))}
          </ul>
        </div>
        <div className='companyform-form-buttons'>
          <button className='companyform-form_btnSubmit' onClick={handleBack}>
            Back
          </button>
        </div>
      </section>
    </main>
  );
};

export default CompanyInventory;
