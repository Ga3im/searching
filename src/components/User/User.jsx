import { useNavigate } from "react-router-dom";
import * as S from "./User.styled";
import { useUserContext } from "../../App";

export const User = ({ login, avatar, id, setUser }) => {
  const navigate = useNavigate();
  const { user } = useUserContext();

  const handleUerProfil = (e) => {
    e.preventDefault();
    setUser(user.filter((i)=> i.id === id));
    navigate(`/user/${id}`)
  };
  return (
    <S.User onClick={handleUerProfil}>
      <S.UserImage src={avatar} alt=""></S.UserImage>
      <S.UserList>{login}</S.UserList>
    </S.User>
  );
};
