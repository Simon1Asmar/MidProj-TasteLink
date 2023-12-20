import "./App.css";
import UsersTemporaryComponent from "./components/UsersTemporaryComponent";

import UsersProvider from "./contexts/UsersProvider";

import UsersContext from "./contexts/UsersContext";
import { useContext } from "react";

import { AuthContext } from "./contexts/AuthContext";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      {/* <UsersProvider> */}
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<UsersTemporaryComponent />}/>
          </Routes>
        </BrowserRouter>
        {isLoggedIn ? ( <p>Logged in</p> ) : ( <p>Not Logged In</p> )}
      {/* </UsersProvider> */}
    </>
  );
}

export default App;
