import { Route, Routes } from "react-router-dom";
// components
import { NavBar } from "./components/NavBar";
// pages
import { Home } from "./pages/Home";
import { Account } from "./pages/Account";
import { CoinPage } from "./pages/CoinPage";
import { Signin } from "./pages/SignIn";
import { Signup } from "./pages/SignUp";
// themeprovider
import { ThemeProvider } from "./context/theme/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/coin" element={<CoinPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/coin/:coinId" element={<CoinPage />}>
          <Route path=":coinId" />
        </Route>
        <Route path="*" element={<h1>ERROR PAGE NOT FOUND</h1>} />
      </Routes>
    </ThemeProvider>
  );
}
