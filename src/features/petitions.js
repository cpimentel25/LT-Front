const API = process.env.REACT_APP_BACKEND;
// const API = 'http://localhost:8000';

export async function loginUser(user) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  try {
    const response = await fetch(`${API}/auth/local/login`, payload);
    const user = await response.json();
    const id = user?.profile?.id;
    const role = user?.profile?.role;
    localStorage.setItem('token', user.token);
    localStorage.setItem('id', id);
    localStorage.setItem('role', role);
    return (user);
  } catch (error) {
    console.error(error);
  }
};

export async function createCompany(data) {
  const token = localStorage.getItem('token');

  const payload = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(`${API}/api/company`, payload);
    const company = await response.json();
    return (company);
  } catch (error) {
    console.error(error);
  }
};

export async function getAllCompany() {
  const token = localStorage.getItem('token');

  const payload = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(),
  };

  try {
    const response = await fetch(`${API}/api/company`, payload);
    const company = await response.json();
    return company;
  } catch (error) {
    console.error(error);
  }
};

export async function getCompany(id) {
  const token = localStorage.getItem('token');

  const payload = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(),
  };

  try {
    const response = await fetch(`${API}/api/company/${id}`, payload);
    const company = await response.json();
    return company;
  } catch (error) {
    console.error(error);
  }
};

export async function createInventory(data) {
  const token = localStorage.getItem('token');

  const payload = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(`${API}/api/inventory`, payload);
    const inventory = await response.json();
    return (inventory);
  } catch (error) {
    console.error(error);
  }
};

export async function deleteCompany(id) {
  const token = localStorage.getItem('token');

  const payload = {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(`${API}/api/company/${id}`, payload);
    const data = await response.json();
    console.log("🚀 -> Delete success Company by id", id)
    return data;
  } catch (error) {
    console.error(error);
  }
};
