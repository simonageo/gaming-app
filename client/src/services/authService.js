const baseUrl = "http://localhost:3030/users";

export const login = async (email, password) => {
  const response = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-type": "application-json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const result = await response.json();

  if (!response.ok) {
    throw result;
  }
  
  return result;
};

export const register = async (email, password) => {
  const response = await fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      "Content-type": "application-json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const result = await response.json();

  if (!response.ok) {
    throw result;
  }
  
  return result;
}
