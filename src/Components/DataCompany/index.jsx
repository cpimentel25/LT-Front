import { useEffect, useState } from 'react';
import { deleteCompany, getAllCompany } from '../../features/petitions';

import './styles.scss';

const DataCompany = (prop) => {
  const [companys, setCompanys] = useState([]);
  const role = localStorage?.getItem('role');

  const handleBack = (event) => {
    event.preventDefault();
    prop.newSelect('');
  };

  const getData = async () => {
    const data = await getAllCompany();
    setCompanys(data);
  };

  const handleDelete = async (compnayId) => {
    console.log('id Company: ', compnayId);
    await deleteCompany(compnayId);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className='dataCompany'>
      <section className='dataCompany-section'>
        <h3 className='dataCompany-section_title'>Data by Company:</h3>
        <section className='dataCompany-section-data'>
          <div>
            <ul className='dataCompany-section-data-list'>
              {companys?.map((data) => (
                <div className='dataCompany-section-data-list_box'>
                  <li className='dataCompany-section-data-list_box_company'>
                    {data.name}
                  </li>
                  {role === 'ADMIN' ? (
                    <button
                      className='dataCompany-section-data-list_box_btn'
                      onClick={() => handleDelete(data._id)}
                    >
                      Delete
                    </button>
                  ) : null}
                </div>
              ))}
            </ul>
          </div>
        </section>
        <div className='companyform-form-buttons'>
          <button className='companyform-form_btnSubmit' onClick={handleBack}>
            Back
          </button>
        </div>
      </section>
    </main>
  );
};

export default DataCompany;
