import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { UserProfile } from "./components/UserProfile/UserProfile";
import { createContext, useContext, useState } from "react";

export const UserContext = createContext(null);

export function useUserContext() {
  const user = useContext(UserContext);
  const repos = useContext(UserContext);
  return  user, repos ;
}
function App() {
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState();
  return (
    <UserContext.Provider value={{ user, repos }}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main user={user} setUser={setUser} />
            </>
          }
        />
        <Route path="/user/:userId" element={<UserProfile repos={repos} setRepos={setRepos}/>} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
