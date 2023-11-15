const baseUrl = "http://localhost:3030/jsonstore/games";

export const getAll = async () => {
  const response = await fetch(baseUrl);
  const result = await response.json();
  return Object.values(result);
};
