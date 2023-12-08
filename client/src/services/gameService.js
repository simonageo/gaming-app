const baseUrl = "http://localhost:3030/data/games";

export const getAll = async () => {
  const response = await fetch(baseUrl);
  const result = await response.json();
  return Object.values(result);
};

export const createGame = async (data) => {
  const token = localStorage.getItem("accessToken");
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-type": "application-json",
      "X-Authorization": token,
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (!response.ok) {
    throw result;
  }
  return result;
};

export const getOne = async (gameId) => {
  try {
    const response = await fetch(`${baseUrl}/${gameId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const edit = async (gameId, data) => {
  const token = localStorage.getItem("accessToken");
  const response = await fetch(`${baseUrl}/${gameId}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (!response.ok) {
    throw result;
  }
  return result;
};

export const del = async (gameId) => {
  const token = localStorage.getItem("accessToken");

  try {
    const response = await fetch(`${baseUrl}/${gameId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "X-Authorization": token,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};

export const getOneByTitle = async (searchKeyword) => {
  try {
    const query = `?where=${encodeURIComponent(
      `title LIKE "${searchKeyword}"`
    )}`;
    const response = await fetch(`${baseUrl}/${query}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
