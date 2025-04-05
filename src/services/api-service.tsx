const API_URL = import.meta.env.VITE_API_URL

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

export const fetchAuth = async (username: string): Promise<string> => {
  const response = await fetch(`${API_URL}auth?user=${username}`);
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
  const token = response.headers.get("Authorization")?.replace("Bearer ", "");
  if (token) {
    localStorage.setItem("token", token); // Сохраняем токен
  }
  return token || "";
};

export const fetchCompany = async (companyId: string) => {
  const response = await fetch(`${API_URL}companies/${companyId}`, {
    headers: getAuthHeaders(),
  });
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
  return response.json();
};

export const updateCompany = async (companyId: string, updatedData: object) => {
  const response = await fetch(`${API_URL}companies/${companyId}`, {
    method: "PATCH",
    headers: getAuthHeaders(),
    body: JSON.stringify(updatedData),
  });
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
  return response.json();
};

export const deleteCompany = async (companyId: string) => {
  const response = await fetch(`${API_URL}companies/${companyId}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
  return response.json();
};

export const uploadCompanyImage = async (companyId: string, file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_URL}companies/${companyId}/image`, {
    method: "POST",
    headers: {
      Authorization: getAuthHeaders().Authorization, // Только токен
    },
    body: formData,
  });
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
  return response.json();
};

export const deleteCompanyImage = async (companyId: string, imageName: string) => {
  const response = await fetch(`${API_URL}companies/${companyId}/image/${imageName}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
};

export const fetchContact = async (contactId: string) => {
  const response = await fetch(`${API_URL}contacts/${contactId}`, {
    headers: getAuthHeaders(),
  });
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
  return response.json();
};

export const updateContact = async (contactId: string, updatedData: object) => {
  const response = await fetch(`${API_URL}contacts/${contactId}`, {
    method: "PATCH",
    headers: getAuthHeaders(),
    body: JSON.stringify(updatedData),
  });
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
  return response.json();
};


export const initialLoad = async () => {
  try {
    const cId = '12';
    // const storedItem = localStorage.getItem('companies');

    // if (!storedItem) {
    const company = await fetchCompany(cId);
    localStorage.setItem('companies', JSON.stringify(company));
    return company;
    // }
  } catch (error) {
    console.error("API Error:", error);
  }
};
