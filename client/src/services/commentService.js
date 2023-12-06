const baseUrl = "http://localhost:3030/data/comments";

export const create = async (gameId, text, email) => {
  const token = localStorage.getItem("accessToken");
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-type": "application-json",
      "X-Authorization": token,
    },
    body: JSON.stringify({
      gameId,
      text,
      email
    }),
  });
  const result = await response.json();
  if (!response.ok) {
    throw result;
  }
  return result;
};

export const getAllComments = async (gameId) => {
  const query = new URLSearchParams({
    where: `gameId="${gameId}"`,
  });

  const response = await fetch(`${baseUrl}?${query}`);
  const result = response.json();
  console.log(result);
  return result;
};
