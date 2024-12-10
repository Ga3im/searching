import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { UserProfile } from "./components/UserProfile/UserProfile";
import { createContext, useContext, useState } from "react";

export const UserContext = createContext(null);

export function useUserContext() {
  const user = useContext(UserContext);
  return user;
}

function App() {
  const [user, setUser] = useState([]);
  return (
    <UserContext.Provider value={{ user }}>
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
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
