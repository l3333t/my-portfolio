import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Thoughts from "./pages/Thoughts";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen flex flex-col items-center px-6">
        {/* Navigation */}
        <header className="w-full max-w-5xl py-6 flex justify-between items-center border-b border-gray-700 px-4">
          <h1 className="text-2xl font-bold">Blog</h1>
          <nav className="flex gap-8 text-lg">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/thoughts" className="hover:text-gray-400">Thoughts</Link>
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          </nav>
        </header>

        {/* Routing */}
        <div className="w-full max-w-5xl flex-1 flex flex-col items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thoughts" element={<Thoughts />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
