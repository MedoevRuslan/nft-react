import styled, { ThemeProvider } from "styled-components";
import { Sidebar } from "./layout/sections/sidebar/Sidebar";
import { theme } from "./styles/Theme.styled";
import { GlobalStyles } from "./styles/Global.styled";
import { Main } from "./layout/sections/main/Main";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Market } from "./pages/market/Market";
import { ContainerApp } from "./components/ContainerApp";
import { ProductDetails } from "./pages/product/ProductDetails";
import { Profile } from "./pages/profile/Profile";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Sidebar />
        <Routes>
          <Route element={<Main />}>
            <Route index path={"dashboard"} element={<Dashboard />} />
            <Route path={"market"} element={<Market />} />
            <Route path={"market/:productId"} element={<ProductDetails />} />
            <Route path={"profile"} element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
