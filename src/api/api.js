
export const getUser = async ({login, page}) => {
  const res = await fetch(
    `https://api.github.com/search/users?q=${login}&page=${page}`
  );
  if (!res.ok) {
    throw new Error("Ошибка в запросе");
  }
  return res.json().then((data)=> data);
};


export const getRepos = async (login) => {
  const res = await fetch(
    `https://api.github.com/users/${login}`
  );
  if (!res.ok) {
    throw new Error("Ошибка в запросе");
  }
  return res.json().then((data)=> data);
};




