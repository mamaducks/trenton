import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
// import "./App.css";
import { HomeImagesCard } from "./Home/HomeImageCard/HomeImagesCard";
import { Latest } from "./Home/Latest";
import { Meetings } from "./Home/Meetings";
import { FileView } from "./FileView";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Footer } from "./Footer/Footer";
import { InfoCardContainer, InfoCards } from "./PersonInfoCard";
import { ElectedCards } from "./InfoCards/Elected";
import { StewardCards } from "./InfoCards/Stewards";
import { ContactForm } from "./Contact";
import {
  ResponsiveAppBar,
  TrentonAppBar,
  TrentonMetroAppBar,
} from "./AppBar/TrentonAppBar";
import { Resource } from "./Pages/Resource";
import { StewardsCorner } from "./Pages/StewardsResource";
import { About } from "./Pages/About";
// import "./App.css";
// import { Router } from "./Router";
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
          {/* <Router /> */}

          {/* <TrentonAppBar /> */}

          {/* <TrentonMetroAppBar /> */}
          <ResponsiveAppBar />
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resource />} />
            <Route path="/about" element={<About />} />

            <Route path="/about/stewards" element={<StewardCards />} />
            <Route path="/about/elected" element={<ElectedCards />} />
            {/* <Route path="/posts" element={<AllProfiles />} /> */}
            <Route path="/resources/stewards" element={<StewardsCorner />} />
            <Route path="/resources/stewards/checklist" element={<ChecklistTable />} />
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
