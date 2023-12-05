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
  const response = await fetch(`${baseUrl}/${gameId}`);
  const result = await response.json();
  return result;
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
}

export const del = async (gameId) => {
  const token = localStorage.getItem("accessToken");
  const response = await fetch(`${baseUrl}/${gameId}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      "X-Authorization": token,
    },
  });
  // const result = await response.json();
  // if (!response.ok) {
  //   throw result;
  // }
  // return result;
}
