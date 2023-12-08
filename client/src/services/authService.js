const baseUrl = "http://localhost:3030/users";

export const login = async (email, password) => {
  try {
    const response = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      if (response.status === 403) {
        throw new Error("Invalid email or password"); // Provide a specific error message for 403 status
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const register = async (username, email, password) => {
  const response = await fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password
    }),
  });
  const result = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result;
};

export const logout = async () => {
  const token = localStorage.getItem("accessToken");
  const response = await fetch(`${baseUrl}/logout`, {
    method: "GET",
    headers: {
      "X-Authorization": token,
    },
  });
  if (response.status === 204) {
    return {};
  }
};
