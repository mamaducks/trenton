import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Footer } from "./Footer/Footer";
import { ElectedCards } from "./InfoCards/Elected";
import { StewardCards } from "./InfoCards/Stewards";
import { ResponsiveAppBar } from "./AppBar/TrentonAppBar";
import { Resource } from "./Pages/Resource";
import { StewardsCorner } from "./Pages/StewardsResource";
import { About } from "./Pages/About";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import { Contact } from "./Pages/Contact";
import { ChecklistTable } from "./ChecklistTimeLimit";
import { LoginForm } from "./Pages/Login";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <BrowserRouter>
          <RecoilRoot>
            <ResponsiveAppBar />
            <Routes>
              <Route path="/contact" element={<Contact />} />
              <Route path="/resources" element={<Resource />} />
              <Route path="/about" element={<About />} />

              <Route path="/about/stewards" element={<StewardCards />} />
              <Route path="/about/elected" element={<ElectedCards />} />
              <Route path="/resources/stewards" element={<StewardsCorner />} />
              <Route
                path="/resources/stewards/checklist"
                element={<ChecklistTable />}
              />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
          </RecoilRoot>
        </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
