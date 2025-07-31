import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { themeStyles } from "./Styles/themes";
import { ThemeProvider, useTheme } from "./Context/ThemeContext";
import MainContentWrapper from "./components/MainContentWrapper";
import './App.css'

function Layout() {
  const { theme } = useTheme();
  return (
    <div id="app-div" className={`min-h-screen ${themeStyles[theme]} transition-colors duration-300 ${theme == "theme2" ? ' flex' :''}`}>
      <Header />
      <MainContentWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </MainContentWrapper>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  );
}

export default App;
