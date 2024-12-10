import * as S from "./Route.styled";
import { getUser } from "../../api/api";

export const Route = ({
  total,
  length,
  search,
  setUser,
  setPageCount,
  pageCount
}) => {


  let totalPage =
    total % length > 0
      ? Math.round(total / length + 1)
      : Math.round(total / length);

  const handlePrev = async () => {
    if (pageCount > 1) {
      setPageCount(--pageCount);
      const users = await getUser({ login: search, page: pageCount });
      setUser(users.items);
    }
  };

  const handleNext = async () => {
    if (totalPage > pageCount) {
      setPageCount(++pageCount);
      const users = await getUser({ login: search, page: pageCount });
      setUser(users.items);
    }
  };

  return (
    <S.pageRoute>
      <S.Button onClick={handlePrev}>◀</S.Button>
      <S.pageCount>{pageCount}</S.pageCount>
      <S.Button onClick={handleNext}>▶</S.Button>
      <p>{totalPage ? `...${totalPage}` : ""}</p>
    </S.pageRoute>
  );
};
