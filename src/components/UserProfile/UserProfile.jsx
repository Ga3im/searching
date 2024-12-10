import { useState } from "react";
import { getRepos } from "../../api/api";
import { useUserContext } from "../../App";
import { Header } from "../Header/Header";
import * as S from "./UserProfile.styled";

export const UserProfile = () => {
  const { user } = useUserContext();
  const [repos, setRepos] = useState();
  const res = async () => {
    const a = await getRepos(user[0].login);
    setRepos(a.public_repos);
  };
  res();

  return (
    <>
      <Header />
      <S.MainProfil>
        <h1>Страница пользователя</h1>
        <S.UserImage src={user[0].avatar_url} alt=""></S.UserImage>
        <S.Repos>
          <p>Репозитории:</p>
          {repos}
        </S.Repos>
        <p>login:{user[0].login}</p>
      </S.MainProfil>
    </>
  );
};
