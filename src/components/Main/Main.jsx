import { useState } from "react";
import { getUser } from "../../api/api";
import * as S from "./Main.styled";
import { Route } from "../Route/Route";
import { User } from "../User/User";
import { useUserContext } from "../../App";

export const Main = ({ user, setUser }) => {
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState();
  const [err, setErr] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  let [pageCount, setPageCount] = useState(1);


  const handleSearch = async (e) => {
    e.preventDefault();
    if (search === "") {
      setErr("Поле ввода пуста");
    } else {
      setErr(null);
      setPageCount(1);
      const users = await getUser({ login: search, page: 1 });
      setUser(users.items);
      setTotal(users.total_count);
    }
  };

  const handleSort = async (e) => {
    e.preventDefault();
  };

  const handleDateSearch = () => {
    setIsOpen(!isOpen);
  };

  const dateFilter = ["По умолчанию", "По убыванию", "По возрастанию"];

  return (
    <>
      <S.Form onSubmit={handleSearch}>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <S.Button type="submit">🔍</S.Button>
      </S.Form>
      <S.DateFilterItems>
        <p>Сортировка по репозиториям:</p>
        <S.DateSearch $isOpen={isOpen} onClick={handleDateSearch}>
          {dateFilter[0]}
        </S.DateSearch>
        <S.Column>
          {isOpen && dateFilter.map((i) => <S.FilterItem>{i}</S.FilterItem>)}
        </S.Column>
      </S.DateFilterItems>
      <S.Main>
        <S.Ul>
          {err ? (
            <S.Error>{err}</S.Error>
          ) : user.length <= 0 ? '' : (
            user.map((i) => (
              <User
                key={i.id}
                id={i.id}
                avatar={i.avatar_url}
                login={i.login}
                setUser={setUser}
              />
            ))
          )}
        </S.Ul>
      </S.Main>
      {err ? (
        ""
      ) : (
        <Route
          setPageCount={setPageCount}
          pageCount={pageCount}
          setUser={setUser}
          length={user.length}
          total={total}
          search={search}
        />
      )}
    </>
  );
};
