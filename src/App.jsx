import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorBoundary from "./Pages/ErrorBoundary";
import Layout from "./Layout";
import Blog from "./Pages/Blog";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="blog" element={<Blog />} />
            <Route path="*" element={<ErrorBoundary />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
