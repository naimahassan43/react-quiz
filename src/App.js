import "./App.css";
import Layout from "./components/Layout";
import Result from "./components/pages/Result";
import Login from "./components/pages/Login";
import Quiz from "./components/pages/Quiz";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </Layout>
  );
}

export default App;
