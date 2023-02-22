import { useEffect, useState } from 'react';
import { getAllCompany, getCompany } from '../../features/petitions';

import './styless.scss';

const PrintPdfById = (prop) => {
  const [companys, setCompanys] = useState([]);
  const [idCompany, setIdCompany] = useState(null);

  const API = process.env.REACT_APP_BACKEND;

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
    const idCompany = await getCompany(value);
    setIdCompany(idCompany._id);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className='printpdf'>
      <form className='printpdf-form'>
        <h3 className='printpdf-form-title'>Download inventory by Company</h3>
        <div className='printpdf-form-section'>
          <p>Select Company:</p>
          <select
            className='companyinventory-section-select'
            onChange={handleSelect}
          >
            <option disabled selected hidden>
              Select a Company
            </option>
            {companys?.map((element) => (
              <option key={element._id} value={element._id}>
                {element.name}
              </option>
            ))}
          </select>
        </div>
        <div className='printpdf-form-buttons'>
          {idCompany !== null ? (
            <div>
              <a
                className='printpdf-form-buttons_btn'
                href={`${API}/pdf/${idCompany}`}
              >
                Download Data
              </a>
              <button className='printpdf-form-buttons_btn'>
                Send by email
              </button>
            </div>
          ) : (
            <p className='printpdf-form-buttons_info'>
              Please select a Company
            </p>
          )}
        </div>
        <div className='companyform-form-buttons'>
          <button
            type='button'
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

export default PrintPdfById;
