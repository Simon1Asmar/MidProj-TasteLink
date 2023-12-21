import "./App.css";
import UsersTemporaryComponent from "./components/UsersTemporaryComponent";

import UsersProvider from "./contexts/UsersProvider.jsx";

import AuthProvider from "./contexts/AuthContext.jsx";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import SignInOrUpCard from "./components/SignInOrUpCard";
import RestaurantAdminPage from "./components/RestaurantAdminPage";
import ErrorPage from "./components/ErrorPage.jsx";
import HomePage from "./components/HomePage.jsx";
import Header from "./components/Header.jsx";
import BottomNavBar from "./components/BottomNavBar.jsx";
import MenuPage from "./components/MenuPage.jsx";
import JobsPage from "./components/JobsPage.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import CartPage from "./components/CartPage.jsx";
import OrdersPage from "./components/OrdersPage.jsx";

function App() {
  // const {
  //   email,
  //   setEmail,
  //   password,
  //   setPassword,
  //   errorMsg,
  //   isLoggedIn,
  //   signIn,
  //   signUp,
  //   logOut,
  //   userData,
  // } = useContext(AuthContext);

  return (
    <>
      {/* <UsersProvider> */}
      <BrowserRouter>
        <UsersProvider>
          <AuthProvider>
            <Header/>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/UserAuthentication" element={<SignInOrUpCard />} />
              <Route
                path="/RestaurantAdminPage"
                element={<RestaurantAdminPage />}
              />
              <Route path="/menu/:id" element={<MenuPage />}/>
              <Route path="/Jobs" element={<JobsPage/>}/>
              <Route path="/Profile" element={<ProfilePage/>}/>
              <Route path="/Cart" element={<CartPage/>}/>
              <Route path="/Orders" element={<OrdersPage/>}/>
              <Route path='/Error404' element={<ErrorPage/>}/>
              <Route path='*' element={<ErrorPage/>}/>
            </Routes>
            <BottomNavBar/>
          </AuthProvider>
        </UsersProvider>
      </BrowserRouter>
      {/* {isLoggedIn ? <p>Logged in</p> : <p>Not Logged In</p>} */}
      {/* </UsersProvider> */}
    </>
  );
}

export default App;
